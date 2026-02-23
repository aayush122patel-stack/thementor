import React from 'react';

export interface CourseProps {
  title: string;
  classes: string[];
  description: string;
  icon: React.ReactNode;
}

export interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}