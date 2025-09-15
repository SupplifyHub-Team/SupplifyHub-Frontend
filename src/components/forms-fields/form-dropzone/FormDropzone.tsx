"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Button } from "../../ui/button";
import { Control, FieldValues, Path } from "react-hook-form";
import { cn, formatFileSize, getFileIcon } from "@/lib/utils";
import { Upload, File, X } from "lucide-react";
import Image from "next/image";

interface FileWithPreview extends File {
  preview?: string;
}

interface FileItemProps {
  file: FileWithPreview;
  index: number;
  onRemove: (index: number) => void;
}

const FileItem: React.FC<FileItemProps> = ({ file, index, onRemove }) => {
  return (
    <div className="flex items-center gap-4 justify-between p-4  border border-gray-200 rounded-lg hover:shadow-md transition ">
      <div className="flex items-center flex-wrap gap-2">
        {getFileIcon(file)}

        <div>
          <p className="text-sm font-medium text-gray-900 truncate w-40 ">
            {file.name}
          </p>
          <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
        </div>

        {/* Image Preview */}
        {file.preview && (
          <div className="flex-shrink-0">
            <div className="relative size-16">
              <Image
                fill
                src={file.preview}
                alt={file.name}
                className="object-contain rounded-lg border"
              />
            </div>
          </div>
        )}
      </div>

      {/* Remove Button */}
      <Button
        type="button"
        size="sm"
        variant="destructive"
        onClick={() => onRemove(index)}
        className="mx-4">
        <X className="w-4 h-4" />
      </Button>
    </div>
  );
};

interface FileListProps {
  files: FileWithPreview[];
  onRemoveFile: (index: number) => void;
}

const FileList: React.FC<FileListProps> = ({ files, onRemoveFile }) => {
  if (files.length === 0) return null;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-medium text-gray-700">
        الملفات المحددة ({files.length})
      </h4>
      <div className="grid gap-3">
        {files.map((file, index) => (
          <FileItem
            key={`${file.name}-${index}`}
            file={file}
            index={index}
            onRemove={onRemoveFile}
          />
        ))}
      </div>
    </div>
  );
};

interface FileDropzoneProps {
  files: FileWithPreview[];
  onFilesChange: (files: FileWithPreview[]) => void;
  accept?: Record<string, string[]>;
  maxFiles?: number;
  maxSize?: number;
  multiple?: boolean;
  disabled?: boolean;
  placeholder?: string;
  name: string;
}

const FileDropzone: React.FC<FileDropzoneProps> = ({
  files,
  onFilesChange,
  accept,
  maxFiles = 5,
  maxSize = 2 * 1024 * 1024,
  multiple = true,
  disabled = false,
  placeholder = "اسحب وأفلت الملفات هنا أو انقر للاختيار",
  name
}) => {
  const [dragActive, setDragActive] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: file.type.startsWith("image/")
            ? URL.createObjectURL(file)
            : undefined,
        })
      );

      if (multiple) {
        const updatedFiles = [...files, ...newFiles].slice(0, maxFiles);
        onFilesChange(updatedFiles);
      } else {
        onFilesChange(newFiles.slice(0, 1));
      }
      setDragActive(false);
    },
    [files, onFilesChange, multiple, maxFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxFiles: multiple ? maxFiles : 1,
    maxSize,
    multiple,
    disabled,
    onDragEnter: () => setDragActive(true),
    onDragLeave: () => setDragActive(false),
  });

  const removeFile = (indexToRemove: number) => {
    const updatedFiles = files.filter((_, index) => index !== indexToRemove);
    onFilesChange(updatedFiles);
  };

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={cn(
          "relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200",
          isDragActive || dragActive
            ? "border-blue-400 bg-blue-50 scale-105"
            : "border-gray-300 hover:border-gray-400 hover:bg-gray-50",
          disabled && "opacity-50 cursor-not-allowed",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        )}>
        <input id={name} {...getInputProps()} />

        {/* Upload Icon */}
        <div
          className={cn(
            "w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-colors duration-200",
            isDragActive || dragActive ? "bg-blue-100" : "bg-gray-100"
          )}>
          <Upload
            className={cn(
              "w-8 h-8 transition-colors duration-200",
              isDragActive || dragActive ? "text-blue-600" : "text-gray-600"
            )}
          />
        </div>

        {/* Main Text */}
        <div className="space-y-2">
          <p
            className={cn(
              "text-lg font-medium transition-colors duration-200",
              isDragActive || dragActive ? "text-blue-700" : "text-gray-700"
            )}>
            {isDragActive ? "أفلت الملفات هنا" : placeholder}
          </p>
          <p className="text-sm text-gray-500">
            أو{" "}
            <span className="text-blue-600 font-medium">
              انقر للاختيار من جهازك
            </span>
          </p>
        </div>

        {/* File Restrictions */}
        <div className="mt-4 text-xs text-gray-400 space-y-1">
          {maxSize && <p>الحد الأقصى لحجم الملف: {formatFileSize(maxSize)}</p>}
          {multiple && maxFiles && (
            <p>عدد الملفات المسموح: {maxFiles} ملف كحد أقصى</p>
          )}
        </div>
      </div>

      {/* File List */}
      <FileList files={files} onRemoveFile={removeFile} />
    </div>
  );
};

// Main FormDropzone Component
interface FormDropzoneProps<TFormValues extends FieldValues> {
  control: Control<TFormValues>;
  name: Path<TFormValues>;
  label?: string;
  description?: string;
  placeholder?: string;
  accept?: Record<string, string[]>;
  maxFiles?: number;
  maxSize?: number;
  multiple?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function FormDropzone<TFormValues extends FieldValues>({
  control,
  name,
  label,
  description,
  placeholder = "اسحب وأفلت الملفات هنا أو انقر للاختيار",
  accept,
  maxFiles = 5,
  maxSize = 5 * 1024 * 1024,
  multiple = true,
  disabled = false,
  className,
}: FormDropzoneProps<TFormValues>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const files = multiple
          ? field.value || []
          : field.value
          ? [field.value]
          : [];

        const handleFilesChange = (newFiles: FileWithPreview[]) => {
          if (multiple) {
            field.onChange(newFiles);
          } else {
            field.onChange(newFiles[0] || null);
          }
        };

        return (
          <FormItem className={className}>
            {label && (
              <FormLabel htmlFor={name} className="text-base font-semibold ">
                {label}
              </FormLabel>
            )}
            {description && (
              <FormDescription className="text-gray-600">
                {description}
              </FormDescription>
            )}
            <FormControl>
              <FileDropzone
                name={name}
                files={files}
                onFilesChange={handleFilesChange}
                accept={accept}
                maxFiles={maxFiles}
                maxSize={maxSize}
                multiple={multiple}
                disabled={disabled}
                placeholder={placeholder}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
