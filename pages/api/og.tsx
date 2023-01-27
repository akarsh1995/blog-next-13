import { type PageConfig } from 'next';
import { NextRequest } from 'next/server';
import { ImageResponse } from '@vercel/og';

export const config: PageConfig = {
  runtime: 'edge',
};

const fontRegular = fetch(
  new URL('../../public/assets/RedHatDisplay-Regular.ttf', import.meta.url),
).then((res) => res.arrayBuffer());

const fontSemiBold = fetch(
  new URL('../../public/assets/RedHatDisplay-SemiBold.ttf', import.meta.url),
).then((res) => res.arrayBuffer());

const fontBold = fetch(
  new URL('../../public/assets/RedHatDisplay-Bold.ttf', import.meta.url),
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const fontRegularData = await fontRegular;
  const fontSemiBoldData = await fontSemiBold;
  const fontBoldData = await fontBold;

  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>&subtitle=<subtitle>
    const hasTitle = searchParams.has('title');
    const title = hasTitle && searchParams.get('title')?.slice(0, 100);
    const hasSubtitle = searchParams.has('subtitle');
    const subtitle = hasSubtitle && searchParams.get('subtitle')?.slice(0, 100);

    return new ImageResponse(
      (
        <div tw="h-full w-full flex flex-col items-center justify-center bg-slate-300">
          <div
            tw="flex flex-row items-center text-7xl"
            style={{
              marginBottom: title ? '8rem' : '0rem',
              fontFamily: 'Red Hat Display',
            }}
          >
            <div tw="text-rose-600 dark:text-rose-400">‹</div>
            <h1
              tw="mx-0.5 font-semibold whitespace-nowrap text-center drop-shadow-sm text-slate-800 hover:text-rose-600 dark:text-rose-50 dark:hover:text-rose-400"
              style={{
                fontFamily: 'Red Hat Display Bold',
              }}
            >
              kfir
              <span
                tw="px-px font-light text-rose-600 dark:text-rose-400"
                style={{
                  fontFamily: 'Red Hat Display',
                }}
              >
                /
              </span>
              blog
            </h1>
            <div tw="text-rose-600 dark:text-rose-400">›</div>
          </div>

          <div
            tw="text-5xl text-slate-800 text-center mb-4"
            style={{ fontFamily: 'Red Hat Display SemiBold' }}
          >
            {title}
          </div>

          <div
            tw="text-2xl text-slate-800 text-center"
            style={{ fontFamily: 'Red Hat Display' }}
          >
            {subtitle}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Red Hat Display',
            data: fontRegularData,
            style: 'normal',
          },
          {
            name: 'Red Hat Display SemiBold',
            data: fontSemiBoldData,
            style: 'normal',
          },
          {
            name: 'Red Hat Display Bold',
            data: fontBoldData,
            style: 'normal',
          },
        ],
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response('Failed to generate the image', {
      status: 500,
    });
  }
}
