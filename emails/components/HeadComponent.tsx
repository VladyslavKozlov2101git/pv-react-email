import { Head } from '@react-email/components';

const HeadComponent = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="x-apple-disable-message-reformatting" />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body, table, td, a {
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }
            table, td {
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
            }
          `,
        }}
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Blinker:wght@700&family=Outfit:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default HeadComponent;
