"use client";
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useAppSelector } from "@/state/redux";
import { useGetPropertiesQuery } from "@/state/api";
import { Property } from "@/types/prismaTypes";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

// Helper functions to validate latitude and longitude
const isValidLatitude = (lat: number): boolean => lat >= -90 && lat <= 90;
const isValidLongitude = (lng: number): boolean => lng >= -180 && lng <= 180;

const Map = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const filters = useAppSelector((state) => state.global.filters);
  const {
    data: properties,
    isLoading,
    isError,
  } = useGetPropertiesQuery(filters);

  useEffect(() => {
    if (isLoading || isError || !properties) return;

    // Determine the map center
    let center: [number, number] = [-74.5, 40]; // Default center
    if (
      Array.isArray(filters.coordinates) &&
      filters.coordinates.length === 2 &&
      typeof filters.coordinates[0] === "number" &&
      typeof filters.coordinates[1] === "number" &&
      isValidLongitude(filters.coordinates[0]) &&
      isValidLatitude(filters.coordinates[1])
    ) {
      center = [filters.coordinates[0], filters.coordinates[1]];
    }

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/zaidzaid/cm96y8xcq00ed01qld8en6xqc",
      center,
      zoom: 9,
    });

    properties.forEach((property) => {
      const { latitude, longitude } = property.location.coordinates;
      if (
        typeof latitude === "number" &&
        typeof longitude === "number" &&
        isValidLatitude(latitude) &&
        isValidLongitude(longitude)
      ) {
        const marker = createPropertyMarker(property, map);
        const markerElement = marker.getElement();
        const path = markerElement.querySelector("path[fill='#3FB1CE']");
        if (path) path.setAttribute("fill", "#000000");
      } else {
        console.warn(
          `Invalid coordinates for property ID ${property.id}:`,
          property.location.coordinates
        );
      }
    });

    const resizeMap = () => {
      if (map) setTimeout(() => map.resize(), 700);
    };
    resizeMap();

    return () => map.remove();
  }, [isLoading, isError, properties, filters.coordinates]);

  if (isLoading) return <>Loading...</>;
  if (isError || !properties) return <div>Failed to fetch properties</div>;

  return (
    <div className="basis-5/12 grow relative rounded-xl">
      <div
        className="map-container rounded-xl"
        ref={mapContainerRef}
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
};

const createPropertyMarker = (property: Property, map: mapboxgl.Map) => {
  const { latitude, longitude } = property.location.coordinates;
  const marker = new mapboxgl.Marker()
    .setLngLat([longitude, latitude]) // Ensure correct order: [longitude, latitude]
    .setPopup(
      new mapboxgl.Popup().setHTML(
        `
        <div class="marker-popup">
          <div class="marker-popup-image"></div>
          <div>
            <a href="/search/${property.id}" target="_blank" class="marker-popup-title">${property.name}</a>
            <p class="marker-popup-price">
              $${property.pricePerMonth}
              <span class="marker-popup-price-unit"> / month</span>
            </p>
          </div>
        </div>
        `
      )
    )
    .addTo(map);
  return marker;
};

export default Map;
