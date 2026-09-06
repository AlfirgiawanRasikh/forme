import { ImageResponse } from 'next/og';

export const alt = 'FORME — Independent digital studio';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'stretch',
          background: '#FAF9F6',
          color: '#0A0A0A',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Arial, sans-serif',
          height: '100%',
          justifyContent: 'space-between',
          padding: '76px 84px',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: '-0.04em',
          }}
        >
          FORME
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(10, 10, 10, 0.18)',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 34,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 62,
              fontWeight: 400,
              letterSpacing: '-0.045em',
              lineHeight: 1.04,
              maxWidth: 920,
            }}
          >
            Independent digital studio for brand, culture and technology.
          </div>
          <div
            style={{
              color: '#6B6B6B',
              display: 'flex',
              fontSize: 20,
              letterSpacing: '0.08em',
              marginTop: 42,
              textTransform: 'uppercase',
            }}
          >
            Paris / Jakarta · Available worldwide
          </div>
        </div>
      </div>
    ),
    size
  );
}
