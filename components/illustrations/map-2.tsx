"use client"
import DottedMap from "dotted-map"

const cities = [
  { lat: 19.076, lng: 72.8777 },
  { lat: 28.7041, lng: 77.1025 },
  { lat: 12.9716, lng: 77.5946 },
  { lat: 13.0827, lng: 80.2707 },
  { lat: 17.385, lng: 78.4867 },
  { lat: 22.5726, lng: 88.3639 },
  { lat: 18.5204, lng: 73.8567 },
  { lat: 23.0225, lng: 72.5714 },
  { lat: 26.9124, lng: 75.7873 },
  { lat: 26.1445, lng: 91.7362 },
  { lat: 27.0844, lng: 93.6053 },
  { lat: 25.5941, lng: 85.1376 },
  { lat: 21.1458, lng: 79.0882 },
  { lat: 23.8103, lng: 90.4125 },
  { lat: 27.7172, lng: 85.324 },
  { lat: 27.4728, lng: 89.639 },
  { lat: 16.8409, lng: 96.1735 },
  { lat: 6.9271, lng: 79.8612 },
  { lat: 13.7563, lng: 100.5018 },
  { lat: 1.3521, lng: 103.8198 },
  { lat: 21.0285, lng: 105.8542 },
  { lat: 31.2304, lng: 121.4737 },
  { lat: 39.9042, lng: 116.4074 },
  { lat: 35.6895, lng: 139.6917 },
  { lat: 25.0173, lng: 121.4467 },
  { lat: 14.5995, lng: 120.9842 },
  { lat: 3.139, lng: 101.6869 },
  { lat: -6.2088, lng: 106.8456 },
  { lat: 25.276987, lng: 55.296249 },
  { lat: 24.7136, lng: 46.6753 },
]

const factory = { lat: 27.31, lng: 94.65 }

export const MapIllustration = () => {
  const map = new DottedMap({ height: 55, grid: "diagonal" })

  cities.forEach((pin) => {
    map.addPin({
      ...pin,
      svgOptions: { color: "oklch(55% 0.05 160)", radius: 0.2 },
    })
  })

  map.addPin({
    ...factory,
    svgOptions: { color: "oklch(64% 0.18 142)", radius: 0.45 },
  })

  const svgMap = map.getSVG({
    radius: 0.18,
    color: "oklch(45% 0.013 285.805)",
    shape: "circle",
    backgroundColor: "transparent",
  })

  return (
    <div className="relative mx-auto w-full">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        alt="Map highlighting our factory in Likabali and the regions we serve"
        className="h-auto w-full"
      />
    </div>
  )
}

export default MapIllustration
