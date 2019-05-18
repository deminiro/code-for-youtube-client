export default function Adaptive() {
  async function adaptiveScreens() {
    const { head } = document;
    // const blocksOfClips = document.getElementById('components');
    head.innerHTML += `<style> 
    @media screen and (max-width: 600px) {
      .items {
        grid-gap: 87%;
        margin-left: 26%;
      }
    }
      </style>`;
  }
  adaptiveScreens();
}
