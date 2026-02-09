interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="p-3 mb-4 bg-red-500/20 border border-red-500/50 rounded-lg backdrop-blur-sm">
      <p className="text-red-200 text-sm">{message}</p>
    </div>
  );
}
