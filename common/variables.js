export function getURLStationNames(lat, lon){
  return "https://api.schmuckli.net/fitbit_os/irish_rail_transport/near_locations.php?lat="+lat+"&lon="+lon;
}

export function getURLStationDetails(id){
  return "https://api.schmuckli.net/fitbit_os/irish_rail_transport/get_station_data.php?station_code="+id;
}