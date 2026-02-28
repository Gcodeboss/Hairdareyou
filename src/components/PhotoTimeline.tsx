
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';

const PhotoTimeline = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  // Mock photo data
  const photos = [
    {
      id: 1,
      date: '2024-05-15',
      title: 'Starting Point',
      description: 'Beginning of my hair journey',
      url: '/placeholder.svg',
      analysis: 'Baseline measurement taken'
    },
    {
      id: 2,
      date: '2024-06-01',
      title: '2 Weeks Progress',
      description: 'First routine checkpoint',
      url: '/placeholder.svg',
      analysis: 'Slight improvement in texture'
    },
    {
      id: 3,
      date: '2024-06-14',
      title: '1 Month Progress',
      description: 'Consistent routine showing results',
      url: '/placeholder.svg',
      analysis: 'Noticeable reduction in frizz'
    }
  ];

  const nextPhoto = () => {
    setSelectedPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setSelectedPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const selectedPhoto = photos[selectedPhotoIndex];

  return (
    <Card className="p-6 mb-6 rounded-3xl bg-white border border-blush-rose shadow-soft">
      <div className="flex items-center space-x-3 mb-4">
        <Camera className="w-5 h-5 text-soft-terracotta" />
        <h2 className="text-lg font-bold text-deep-mocha">Photo Progress Timeline</h2>
      </div>

      {/* Photo Viewer */}
      <div className="relative mb-4">
        <div className="aspect-square rounded-2xl bg-gradient-to-br from-blush-rose/30 to-lavender-mist/30 border-2 border-dashed border-deep-mocha/20 flex items-center justify-center mb-3">
          <div className="text-center">
            <Camera className="w-12 h-12 text-deep-mocha/40 mx-auto mb-2" />
            <div className="text-sm font-medium text-deep-mocha/60">
              {selectedPhoto.title}
            </div>
            <div className="text-xs text-deep-mocha/40">
              {new Date(selectedPhoto.date).toLocaleDateString()}
            </div>
          </div>
        </div>

        {/* Navigation */}
        {photos.length > 1 && (
          <div className="flex justify-between items-center">
            <Button
              onClick={prevPhoto}
              variant="outline"
              size="icon"
              className="rounded-full border-2 border-deep-mocha/20 hover:bg-blush-rose"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex space-x-2">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPhotoIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === selectedPhotoIndex
                      ? 'bg-soft-terracotta w-4'
                      : 'bg-deep-mocha/20'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextPhoto}
              variant="outline"
              size="icon"
              className="rounded-full border-2 border-deep-mocha/20 hover:bg-blush-rose"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Photo Details */}
      <div className="space-y-3">
        <div className="p-3 rounded-2xl bg-blush-rose/30">
          <div className="text-sm font-semibold text-deep-mocha mb-1">
            {selectedPhoto.description}
          </div>
          <div className="text-xs text-deep-mocha/70">
            AI Analysis: {selectedPhoto.analysis}
          </div>
        </div>

        {/* Add Photo Button */}
        <Button
          variant="outline"
          className="w-full rounded-2xl border-2 border-dashed border-deep-mocha/30 hover:bg-blush-rose hover:border-soft-terracotta active:animate-tap-scale"
        >
          <Camera className="w-4 h-4 mr-2" />
          <span className="font-semibold">Add Progress Photo</span>
        </Button>
      </div>

      {/* Timeline Overview */}
      <div className="mt-4 pt-4 border-t border-deep-mocha/10">
        <div className="text-xs text-deep-mocha/60 font-medium mb-2">Timeline Overview</div>
        <div className="flex space-x-2 overflow-x-auto">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(index)}
              className={`flex-shrink-0 p-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                index === selectedPhotoIndex
                  ? 'bg-soft-terracotta text-white'
                  : 'bg-deep-mocha/10 text-deep-mocha/70 hover:bg-blush-rose'
              }`}
            >
              {photo.title}
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default PhotoTimeline;
