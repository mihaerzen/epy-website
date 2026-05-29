import {ImageResponse} from 'next/og';
import {ADDRESS_LOCALITY, BUSINESS_NAME, PHONE_DISPLAY} from '@/lib/seo';

export const alt = `${BUSINESS_NAME} — Avtoelektrika in avtoelektronika, ${ADDRESS_LOCALITY}`;
export const size = {width: 1200, height: 630};
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#a70e13',
          color: '#ffffff',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{fontSize: 130, fontWeight: 800, letterSpacing: '-2px'}}>EPJ</div>
        <div style={{fontSize: 58, fontWeight: 700, marginTop: 8}}>
          Avtoelektrika in avtoelektronika
        </div>
        <div style={{display: 'flex', fontSize: 40, marginTop: 24, opacity: 0.95}}>
          {ADDRESS_LOCALITY} · {PHONE_DISPLAY}
        </div>
      </div>
    ),
    size,
  );
}
