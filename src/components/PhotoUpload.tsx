
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Upload, X, Check } from 'lucide-react';

interface PhotoUploadProps {
  type: 'hair' | 'scalp';
  onPhotoUpload: (file: File | null) => void;
  uploaded: boolean;
}

const PhotoUpload = ({ type, onPhotoUpload, uploaded }: PhotoUploadProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFileChange = (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
      onPhotoUpload(file);
    } else {
      setPreview(null);
      onPhotoUpload(null);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleFileChange(file);
    }
  };

  const colorScheme = type === 'hair' 
    ? { border: 'border-soft-terracotta/50 hover:border-soft-terracotta', bg: 'bg-blush-rose/30 hover:bg-blush-rose/50', icon: 'text-soft-terracotta' }
    : { border: 'border-botanical-green/50 hover:border-botanical-green', bg: 'bg-botanical-green/20 hover:bg-botanical-green/30', icon: 'text-botanical-green' };

  return (
    <div className="relative">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
        className="hidden"
        id={`photo-${type}`}
      />
      
      <Card 
        className={`p-8 border-2 border-dashed ${colorScheme.border} ${colorScheme.bg} text-center cursor-pointer transition-all duration-300 rounded-2xl active:animate-tap-scale ${dragOver ? 'scale-105' : ''}`}
        onClick={() => document.getElementById(`photo-${type}`)?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
      >
        {preview ? (
          <div className="relative">
            <img src={preview} alt={`${type} preview`} className="w-24 h-24 object-cover rounded-2xl mx-auto mb-4" />
            <button
              onClick={(e) => { e.stopPropagation(); handleFileChange(null); }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-deep-mocha rounded-full flex items-center justify-center"
            >
              <X className="w-3 h-3 text-white" />
            </button>
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-4 h-4 text-botanical-green" />
              <span className="text-sm font-semibold text-deep-mocha">Photo uploaded</span>
            </div>
          </div>
        ) : (
          <>
            <Upload className={`w-12 h-12 ${colorScheme.icon} mx-auto mb-4`} />
            <div className="text-deep-mocha font-semibold">
              {type === 'hair' ? 'Hair Photo' : 'Scalp Photo'}
            </div>
            <div className="text-sm text-deep-mocha/70 mt-2 font-medium">
              {type === 'hair' ? 'Take a clear photo of your hair' : 'Optional: Photo of your scalp'}
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default PhotoUpload;
