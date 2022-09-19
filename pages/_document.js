import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Elyn Consultores y Asesores</title>
          <meta name="keywords" content="" />
          <meta name="description" content="" />
          <meta name="author" content="" />
          <link
            rel="shortcut icon"
            href="images/logos/02.png"
            type="image/x-icon"
          />
          <link rel="apple-touch-icon" href="/images/nosotros/title.png" />
          <link rel="stylesheet" href="/bootstrap/dist/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="/css/style.css" />
          <link rel="stylesheet" href="/css/responsive.css" />
          <link rel="stylesheet" href="/css/custom.css" />
          {/* Otros estilos */}
          <link rel="stylesheet" href="/css/main.css" />
          <link rel="stylesheet" href="/css/estilosPersonalizados.css" />
          <link rel="stylesheet" href="/css/root.css" />
          <link rel="stylesheet" href="/css/estilosFooter.css" />
          <link rel="stylesheet" href="/css/estilosFormularioContacto.css"/>
          <link rel="stylesheet" href="/css/spinnerCarga.css"/>
          <link rel="stylesheet" href="/css/estilosReCaptcha.css"></link>
          {/* Galería */}
          <link rel="stylesheet" href="css/photoswipe.css"/>
          <link rel="stylesheet" href="css/photoswipe-dynamic-caption-plugin.css"/>
          <link rel="stylesheet" href="css/otrosEstilosPhotoSwipe.css"/>
          <script src="https://www.google.com/recaptcha/api.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/js/jquery-3.2.1.min.js"></script>
          <script src="/@popperjs/core/dist/umd/popper.min.js"></script>
          <script src="/bootstrap/dist/js/bootstrap.min.js"></script>
          <script src="/bootbox/dist/bootbox.min.js"></script>
          <script src="/js/jquery.superslides.min.js"></script>
          <script src="/js/bootstrap-select.js"></script>
          <script src="/js/inewsticker.js"></script>
          <script src="/js/images-loded.min.js"></script>
          <script src="/js/isotope.min.js"></script>
          <script src="/js/owl.carousel.min.js"></script>
          <script src="/js/baguetteBox.min.js"></script>
          <script src="/js/form-validator.min.js"></script>
          <script src="/js/contact-form-script.js"></script>
          <script src="/js/custom.js"></script>
          <script src="/js/mapa.js"></script>
          <script src="/js/server/enviarEmail.js"></script>
          {/* Nuevos js */}
          <script src="/js/main.js"></script>
          {/* Gallery */}
          <script type="module" src="/js/instanciaPhotoSwipe.js"></script>
          <div id="fb-root"></div>
          <script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v10.0&appId=502654373424425&autoLogAppEvents=1" nonce="IFGieTT6"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
