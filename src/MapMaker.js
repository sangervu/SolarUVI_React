import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

<Wrapper apiKey={"YOUR_API_KEY"} render={render}>
  <YourComponent/>
</Wrapper>

const Map: React.FC<{}> = () => {};

const ref = React.useRef<HTMLDivElement>(null);
const [map, setMap] = React.useState<google.maps.Map>();


React.useEffect(() => {
  if (ref.current && !map) {
    setMap(new window.google.maps.Map(ref.current, {}));
  }
}, [ref, map]);

//https://developers.google.com/maps/documentation/javascript/react-map