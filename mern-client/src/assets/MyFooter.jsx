import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const MyFooter = () => {
  return (
    <Footer bgDark>
    <div className="w-full px-4 lg:px-24">
      <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
        <div>
          <Footer.Title title="Compañia" />
          <Footer.LinkGroup col>
            <Footer.Link href="https://blog.casadellibro.com/">Acerca de</Footer.Link>
            <Footer.Link href="https://www.casadellibro.com/atc/asistente">Carreras</Footer.Link>
            <Footer.Link href="https://www.casadellibro.com/register-company">Centro de Marca</Footer.Link>
            <Footer.Link href="https://blog.casadellibro.com/">Blog</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Centro de Ayuda" />
          <Footer.LinkGroup col>
            <Footer.Link href="https://discord.com/channels/@me">Discord Server</Footer.Link>
            <Footer.Link href="https://twitter.com/gabrieladrian06">X</Footer.Link>
            <Footer.Link href="https://www.facebook.com/gabriel.rojas.39545">Facebook</Footer.Link>
            <Footer.Link href="https://www.casadellibro.com/atencion-al-cliente/consulta-dudas">Contactanos</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="legal" />
          <Footer.LinkGroup col>
            <Footer.Link href="https://www.casadellibro.com/politica-cookies">Politicas de Privacidad</Footer.Link>
            <Footer.Link href="https://www.casadellibro.com/ayuda/condicionesRGPD">Licencia</Footer.Link>
            <Footer.Link href="https://www.casadellibro.com/ayuda/condicionesUso">Terminos &amp; Condiciones</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Descargas" />
          <Footer.LinkGroup col>
            <Footer.Link href="https://www.apple.com/la/ios/ios-17/">iOS</Footer.Link>
            <Footer.Link href="https://www.uptodown.com/">Android</Footer.Link>
            <Footer.Link href="https://www.microsoft.com/es-es/software-download/windows10">Windows</Footer.Link>
            <Footer.Link href="https://support.apple.com/es-lamr/102662">MacOS</Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
      <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="Flowbite™" year={2024} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="https://www.facebook.com/gabriel.rojas.39545" icon={BsFacebook} />
          <Footer.Icon href="https://www.instagram.com/gabrielrojasrodriguez06/" icon={BsInstagram} />
          <Footer.Icon href="https://twitter.com/gabrieladrian06" icon={BsTwitter} />
          <Footer.Icon href="https://github.com/Thewantedbrain" icon={BsGithub} />
          <Footer.Icon href="https://dribbble.com/" icon={BsDribbble} />
        </div>
      </div>
    </div>
  </Footer>
  )
}

export default MyFooter