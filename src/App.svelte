<script>
  import { MetaTags } from 'svelte-meta-tags'
  import NFTCard from './components/NFTCard.svelte'
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
  <link
    href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<MetaTags
  title="NFT Card Component"
  description="NFT Card Component built with Svelte and Tailwind CSS"
  openGraph={{
    url: 'https://nft-card-component-seven.vercel.app/',
    title: 'NFT Card Component',
    description: 'NFT Card Component built with Svelte and Tailwind CSS',
    images: [
      {
        url: 'https://res.cloudinary.com/dev-waleed/image/upload/v1642157085/Frontend%20Mentor/Meta%20Images/001_nft-card-component_1200x628.png',
        alt: 'NFT Card Component',
      },
    ],
  }}
/>

<main class="w-screen min-h-screen grid bg-cstm-neutral-dark-blue-main-bg">
  <NFTCard />
</main>
