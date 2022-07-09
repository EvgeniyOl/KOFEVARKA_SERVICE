import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapData = {
  center: [54.965853087746325, 73.39439792988587],
  zoom: 17,
};

const coordinates = [
  [54.9659537801712, 73.39437110779569]
];


const MapYandex = () => (
  <YMaps query={{ lang: "ru_RU", load: "package.full" }}>
    <Map width={'100%'} height={'300px'} defaultState={mapData}>
      {coordinates.map((coordinate, index) => <Placemark key={index} geometry={coordinate} />)}
    </Map>
  </YMaps >
);
export default MapYandex;