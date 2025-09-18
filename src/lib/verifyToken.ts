import { jwtVerify, JWTVerifyResult, decodeJwt } from "jose";
import { JWSSignatureVerificationFailed, JWTExpired } from "jose/errors";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function verifyToken(token?: string) {
  if (!token) return null;

  try {
    const decoded: JWTVerifyResult<IJwtPayload> = await jwtVerify<IJwtPayload>(
      token,
      secret,
      {
        algorithms: ["HS256"],
      }
    );
    return decoded; 
  } catch (err: unknown) {
    if (err instanceof JWTExpired) {
      console.warn("⚠️ Token expired, decoding without verification");
      // still return decoded payload even if expired
      return {
        payload: decodeJwt(token) as IJwtPayload,
        protectedHeader: {},
      } as JWTVerifyResult<IJwtPayload>;
    } else if (err instanceof JWSSignatureVerificationFailed) {
      console.error("❌ Invalid signature:", err);
    } else if (err instanceof Error) {
      console.error("JWT verification failed:", err.message);
    } else {
      console.error("Unknown error during JWT verification:", err);
    }
    return null;
  }
}
