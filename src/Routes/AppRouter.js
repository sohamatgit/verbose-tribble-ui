import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { Stopwatch } from "../Stopwatch/components/Stopwatch";
import { Weather } from "../Weather/components/Weather";
import { Quote } from "../QuoteGenerator/components/Quote";
import { ImageGallery } from "../ImageGallery/components/ImageGallery";

export const AppRouter = () => {
  return (
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/images" element={<ImageGallery />} />
      </Routes>
  );
};

