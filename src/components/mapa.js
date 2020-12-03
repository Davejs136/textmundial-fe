import React from "react"
import GoogleMapReact from "google-map-react"
import "./mapa.scss"

const Mapa = () => {
   const ubicacion = {
      center: {
        lat: 10.5055579,
        lng: -66.9091227,
      },
      zoom: 15,
    }
  return (
    <section id="Mapa" className="mapa contenedor">
      <div className="mapa__contenido">
        <h2>Reciba nuestra asesoría</h2>
        <div className="mapa__columnas">
          <div className="mapa__col-izq">
            <p className="mapa__descripcion">
              Atención personalizada sin ningún compromiso visitándonos en:
            </p>
          </div>
          <div className="mapa__col-der">
            <div className="mapa__mapa">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: process.env.GATSBY_GOOGLE_MAPS_KEY,
                }}
                defaultCenter={ubicacion.center}
                defaultZoom={ubicacion.zoom}
              >
                {/* <AnyReactComponent
               lat={59.955413}
               lng={30.337844}
               text="My Marker"
             /> */}
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mapa
