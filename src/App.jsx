export default function BotswanaTourismPWA() {
  const destinations = [
    {
      name: 'Kasane',
      category: 'Wildlife',
      intro: 'Kasane is a vibrant northern gateway to Chobe National Park, known for elephant sightings and river safaris.',
      route: 'Kazungula Border → Kasane → Chobe National Park',
      hotel: 'Chobe Safari Lodge | +2676250336 | from $271/night',
      emergency: 'Police 999 | Tourism +2673913111',
      map: 'https://www.google.com/maps/search/?api=1&query=Kasane+Botswana'
    }
  ];

  return (
    <div>
      <h1>Discover Botswana</h1>
      {destinations.map((d, i) => (
        <div key={i}>
          <h2>{d.name}</h2>
          <p>{d.intro}</p>
          <p><strong>Route:</strong> {d.route}</p>
          <p><strong>Accommodation:</strong> {d.hotel}</p>
          <p><strong>Emergency Contact:</strong> {d.emergency}</p>
          <a href={d.map} target="_blank" rel="noopener noreferrer">Navigate</a>
        </div>
      ))}
    </div>
  );
}
