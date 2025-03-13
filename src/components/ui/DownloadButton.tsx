
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  pdfUrl: string;
  className?: string;
}

const DownloadButton = ({ pdfUrl, className }: DownloadButtonProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Create a link and trigger download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Reset state after simulated delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 1000);
  };

  return (
    <Button 
      variant="default" 
      size="lg" 
      className={className}
      onClick={handleDownload}
      disabled={isDownloading}
    >
      {isDownloading ? 'Скачивание...' : 'Скачать резюме'} 
      <Download className="ml-2 h-4 w-4" />
    </Button>
  );
};

export default DownloadButton;
