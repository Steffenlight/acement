import React from 'react'

import fallbackImage from '/assets/fallback.png'
import image0 from '/images/4585830e-f38d-4857-b02d-a4367fd5a16e.png'
import image1 from '/images/4bbbb237-d956-43e1-9b49-6a3ef012954c.png'
import image2 from '/images/d8f38e8f-b3ad-4718-879c-4d71a4fc750b.png'
import image3 from '/images/060e8870-8801-41ef-9c61-e5c81eca9c6e.png'
import image4 from '/images/0b34fae4-570f-4f10-9a62-035add1c6243.png'
import image5 from '/images/e49969a1-8df3-44a7-a027-0d47e7d606e0.png'
import image6 from '/images/fc16ab73-7054-4025-a119-f56e315206c1.png'
import image7 from '/images/1605dc9a-3046-4754-a224-d7e0a4846b37.png'
import image8 from '/images/47b41bcb-906d-44c5-bec4-d3381e72adc6.png'
import image9 from '/images/45523fde-9ee8-4628-9852-cfbbda9f77eb.jpg'
import image10 from '/images/45deb9c4-2b92-4163-bdfd-ae4677fb3a17.jpg'
import image11 from '/images/a6e67cf9-b61e-4871-ba50-48987c8b7df7.svg'
import image12 from '/images/ab9594a0-fe42-4747-ac71-df382c8cd10f.png'
import image13 from '/images/c185b9be-4a60-454c-a462-a450dd6732ff.png'
import image15 from '/images/ef834860-78a2-4e3f-85ec-51028a2f4a91.png'
import image18 from '/images/c4b22534-a873-442a-a207-e6233b7bd931.svg'
import image19 from '/images/65fbdb89-4fc3-4f60-a89a-33950c0f0095.svg'
import image20 from '/images/35cf6083-7dc2-4afc-aa21-74bcc0816cf9.svg'
import image21 from '/images/4ab02a3c-21f4-4686-b7f3-d4c7b388d219.svg'
import image22 from '/images/16833365-b082-45d8-8425-54bd45741d9d.svg'
import image23 from '/images/7b114ede-2bd5-43e8-919d-f81952a4786b.jpg'
import image24 from '/images/ac97c907-3a91-42c5-b913-573ab041788b.jpg'
import image26 from '/images/8a8b5f74-e547-4239-87e1-5849b984012c.png'
import image27 from '/images/5a2b3caa-401e-410c-a97d-617b6fa6cfba.png'

type ImageData = {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

const images: Record<string, ImageData> = {
  '0': { src: image0, alt: 'Mitopure Gummies', width: 1600, height: 2000 },
  '1': { src: image1, alt: 'Mitopure Gummies', width: 1600, height: 2000 },
  '2': { src: image2, alt: 'Mitopure Softgels', width: 1600, height: 2000 },
  '3': { src: image3, alt: 'Mitopure Softgels', width: 1600, height: 2000 },
  '4': { src: image4, alt: 'Science of Mitopure (Urolithin A)', width: 1200, height: 1200 },
  '5': { src: image5, alt: 'How Mitopure (Urolithin A) works', width: 1200, height: 1200 },
  '6': { src: image6, alt: 'Mitopure (Urolithin A) Benefits', width: 1200, height: 1200 },
  '7': { src: image7, alt: 'US flag', width: 2640, height: 1760, className: 'round' },
  '8': { src: image8, alt: 'person running', width: 2640, height: 1760, className: 'round' },
  '9': { src: image9, alt: 'Urolithin A vs Creatine', width: 2640, height: 1760, className: 'round' },
  '10': { src: image10, alt: 'Timeline Mitopure Skincare' },
  '11': { src: image11, alt: 'Cell Reports Medicine', className: 'css-1fs0fwq' },
  '12': { src: image12, alt: '', width: 200, height: 200 },
  '13': { src: image13, alt: '', width: 200, height: 200 },
  '14': { src: fallbackImage, alt: '', width: 200, height: 200 },
  '15': { src: image15, alt: '', width: 200, height: 200 },
  '16': { src: fallbackImage, alt: 'Mitopure Powder', width: 1600, height: 2000 },
  '17': { src: fallbackImage, alt: 'Mitopure Powder', width: 1600, height: 2000 },
  '18': { src: image18, alt: 'Elon Musk’s Mom, Maye Musk, Reveals The Secrets To Healthy Aging', width: 88, height: 61, className: 'chakra-image css-yvqbvs' },
  '19': { src: image19, alt: 'Swiss biotech group looks to tap anti-ageing effect of pomegranates', width: 199, height: 61, className: 'chakra-image css-yvqbvs' },
  '20': { src: image20, alt: 'A recent clinical study shows that a natural molecule, Urolithin A, can significantly improve muscle endurance in older people.', width: 79, height: 61, className: 'chakra-image css-yvqbvs' },
  '21': { src: image21, alt: 'It’s all about having the most current, cutting-edge nutrition, coaching, and performance data', width: 155, height: 61, className: 'chakra-image css-yvqbvs' },
  '22': { src: image22, alt: 'These preliminary results suggest that urolithin A supplementation may help counteract age-related declines in muscle performance.', width: 203, height: 61, className: 'chakra-image css-yvqbvs' },
  '23': { src: image23, alt: 'Dr. Mark Hyman, MD', width: 2608, height: 3254 },
  '24': { src: image24, alt: 'Dr. Mark Hyman, MD', width: 2608, height: 2608 },
  '25': { src: fallbackImage, alt: 'Dr. Gabrielle Lyon', width: 3723, height: 3723 },
  '26': { src: image26, alt: 'Dr. Johan Auwerx MD, PhD', width: 800, height: 800 },
  '27': { src: image27, alt: 'Eric Verdin, MD', width: 800, height: 800 },
}

export const Img = ({ id }: { id: string | number }) => {
  const image = images[String(id)]

  if (!image) return null

  const isCoverImage = String(id) === '10'
  const isProductImage = ['0', '1', '2', '3', '16', '17'].includes(String(id))

  return (
    <img
      alt={image.alt}
      className={image.className}
      decoding="async"
      height={image.height}
      loading={isCoverImage ? undefined : 'lazy'}
      src={image.src}
      style={isCoverImage
        ? { position: 'absolute', height: '100%', width: '100%', inset: 0, objectFit: 'cover', objectPosition: 'center', color: 'transparent' }
        : { color: 'transparent', maxWidth: isProductImage ? '100%' : undefined, height: isProductImage ? 'auto' : undefined }}
      width={image.width}
    />
  )
}

export default Img
