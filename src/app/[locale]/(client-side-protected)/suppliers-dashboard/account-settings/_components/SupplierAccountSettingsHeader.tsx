import React from "react";

export default function SupplierAccountSettingsHeader() {
  return (
    <div>
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z" />
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                ملف شركتك
              </h1>
              <p className="text-lg text-gray-600 mt-2 font-medium">
                إدارة معلومات وبيانات شركتك بسهولة
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-indigo-700 font-semibold">نشط</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
