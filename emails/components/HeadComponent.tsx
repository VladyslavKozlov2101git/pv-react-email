import { Font, Head } from '@react-email/components';

const HeadComponent = () => {
  return (
    <Head>
      <Font
        fontFamily="Outfit"
        fallbackFontFamily="Helvetica"
        webFont={{
          url: 'https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NJtEtq.woff2',
          format: 'woff2',
        }}
        fontWeight={400}
        fontStyle="normal"
      />
      <Font
        fontFamily="Outfit"
        fallbackFontFamily="Helvetica"
        webFont={{
          url: 'https://fonts.gstatic.com/s/outfit/v11/QGYsz_MVcBeNP4NJtFtqfr1d.woff2',
          format: 'woff2',
        }}
        fontWeight={500}
        fontStyle="normal"
      />
      <Font
        fontFamily="Outfit"
        fallbackFontFamily="Helvetica"
        webFont={{
          url: 'https://fonts.gstatic.com/s/outfit/v11/QGYsz_MVcBeNP4NJtFtqfqt-d_8.woff2',
          format: 'woff2',
        }}
        fontWeight={600}
        fontStyle="normal"
      />
      <Font
        fontFamily="Blinker"
        fallbackFontFamily="Arial"
        webFont={{
          url: 'https://fonts.gstatic.com/s/blinker/v14/cIf_MaFatEE-VTa4_F8.woff2',
          format: 'woff2',
        }}
        fontWeight={700}
        fontStyle="normal"
      />
    </Head>
  );
};

export default HeadComponent;
