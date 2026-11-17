const memories = [
  {
    title: "Lake Tahoe",
    description: "One of the stops on our big California trip.",
    coordinates: [39.0968, -120.0324]
  },
  {
    title: "Mammoth Lakes",
    description: "One of the stops on our big California trip.",
    coordinates: [37.6273, -118.9899]
  },
  {
    title: "Sequoia National Park",
    description: "One of the stops on our big California trip.",
    coordinates: [36.4864, -118.5658],
    image: "photos/seq.jpeg",
    imageAlt: "Ethan and me visiting Sequoia National Park"
  },
  {
    title: "Yosemite",
    description: "Our last stop before heading back home.",
    coordinates: [37.7433, -119.5758]
  },
  {
    title: "Home area",
    description: "We came back home after our California trip. This location is approximate.",
    coordinates: [34.0522, -118.2437]
  },
  {
    title: "San Francisco",
    description: "Our first time in San Francisco was to see The Strokes.",
    coordinates: [37.7749, -122.4194],
    image: "photos/sanfran.jpg",
    imageAlt: "Ethan and me in San Francisco"
  },
  {
    title: "Austin, Texas",
    description: "We flew out of state to see The Strokes at Austin City Limits.",
    coordinates: [30.2669, -97.7728],
    image: "photos/txt.jpeg",
    imageAlt: "A memory from our trip to Austin"
  },
  {
    title: "San Diego",
    description: "A recent trip together.",
    coordinates: [32.7157, -117.1611]
  },
  {
    title: "Welcome to Arizona",
    description: "The big Arizona sign we saw when we crossed into the state.",
    coordinates: [33.6046, -114.5309]
  },
  {
    title: "Topaz Lake, Nevada",
    description: "We stopped at the stone “Battle Born” sign near Topaz Lake.",
    coordinates: [38.6814, -119.5482]
  },
  {
    title: "Puerto Vallarta, Mexico",
    description: "A stop on our trip to Mexico.",
    coordinates: [20.617, -105.230]
  },
  {
    title: "Mazatlán, Mexico",
    description: "A stop on our trip to Mexico.",
    coordinates: [23.2216, -106.4189]
  },
  {
    title: "Los Cabos, Mexico",
    description: "A stop on our trip to Mexico.",
    coordinates: [22.8905, -109.9167]
  },
  {
    title: "La Paz, Mexico",
    description: "A stop on our trip to Mexico.",
    coordinates: [24.1423, -110.3132]
  }
];

const placesList = document.querySelector("#places-list");

memories.forEach(function (memory) {
  const latitude = memory.coordinates[0];
  const longitude = memory.coordinates[1];
  const mapUrl =
    `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}` +
    `#map=10/${latitude}/${longitude}`;

  const card = document.createElement("article");
  card.className = "place-card";

  if (memory.image) {
    const image = document.createElement("img");
    image.src = memory.image;
    image.alt = memory.imageAlt || `Photo from ${memory.title}`;
    image.loading = "lazy";
    card.appendChild(image);
  }

  const content = document.createElement("div");
  content.className = "place-card-content";

  const heading = document.createElement("h3");
  heading.textContent = memory.title;

  const description = document.createElement("p");
  description.textContent = memory.description;

  const link = document.createElement("a");
  link.href = mapUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = `View ${memory.title} on OpenStreetMap`;

  content.append(heading, description, link);
  card.appendChild(content);
  placesList.appendChild(card);
});