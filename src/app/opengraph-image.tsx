import { ImageResponse } from 'next/og';
import { SITE_CONFIG } from '@/lib/seo';

export const alt = SITE_CONFIG.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#f7e8ef',
          backgroundImage: 'radial-gradient(#e8c8d8 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#ffffff',
            border: '3px solid #3d2333',
            borderRadius: '32px',
            boxShadow: '12px 12px 0 0 #3d2333',
            padding: '64px 72px',
          }}
        >
          <div
            style={{
              fontSize: 28,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#c2417e',
              marginBottom: 24,
            }}
          >
            * Front-end developer *
          </div>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              color: '#3d2333',
              lineHeight: 1.1,
            }}
          >
            Hi! I&apos;m Cammy.
          </div>
          <div
            style={{
              fontSize: 36,
              color: '#7a5568',
              marginTop: 24,
            }}
          >
            I build fun, useful corners of the web.
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#c2417e',
              marginTop: 40,
            }}
          >
            caomi.cc
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
