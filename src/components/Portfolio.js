const DownloadButton = () => {
  const handleDownload = () => {
    // Replace "link-to-your-google-docs-file" with the actual Google Docs link
    const fileUrl = "https://docs.google.com/document/d/1_3V0JTNbR5g7-JvYwKB0iVuq9R8twpjxU7L1fG0c2pI/export?format=pdf";
  
    // Create a temporary anchor element
    const downloadLink = document.createElement("a");
    downloadLink.href = fileUrl;
    downloadLink.download = "document.pdf"; // Set the desired file name with extension
  
    // Programmatically click the anchor element to trigger the download
    downloadLink.click();
  };


  return (
    <button class="btn btn-outline btn-primary max-w-xs" onClick={handleDownload}>
      Download 
    </button>
  );
};

const ViewButton = () => {
const handleView = () => {
  const fileUrl = "https://docs.google.com/document/d/1_3V0JTNbR5g7-JvYwKB0iVuq9R8twpjxU7L1fG0c2pI/edit?usp=sharing";
  const viewLink = document.createElement("a");
  viewLink.href = fileUrl;
  viewLink.view = "document.pdf";
  viewLink.click();
};
  return (
    <button class="btn btn-outline btn-primary max-w-xs" onClick={handleView}>
      View
    </button>
  );
};


 





const Portfolio= () => {
    return (
      <div class="card">
      <div class="card-body">
        <button class="card-title btn-outline btn-accent justify-center text-4xl">My Resume</button>
        <div class="card-actions justify-center">
          <ViewButton />
          <DownloadButton />
        </div>
      </div>
        <div class='card-item h-full'>
          <h1 className="card-title btn-outline btn-accent justify-center items-center text-4xl" style={{padding:'10px'}}>Portfolio</h1>
          <p class='portfolio sub-title bg-primary text-center'>Please scroll through the Projects</p>
      <div class="h-96 carousel carousel-vertical">
      <div class="carousel-item h-full">
          <a target="_blank" rel="noopener" href="https://github.com/LizaSmirnov/professional_portfolio">
              <div class="image-container">
                  <img src="https://github.com/LizaSmirnov/professional_portfolio/assets/122588135/91dc9214-9f73-4e51-be8d-cd86076842db" alt="picture of a bad portfolio website" class="w-full" style={{width: "3000px" }} />
                  <div class="hover-text">Professional Portfolio Version 1</div>
            </div>
          </a>
      </div> 
      <div class="carousel-item h-full">
        <a target="_blank" rel="noopener" href="https://github.com/LizaSmirnov/horiseon_refactor">
              <div class="image-container">
                  <img src="https://github.com/LizaSmirnov/horiseon_refactor/assets/122588135/f63a387a-035d-4a88-b8b3-1de14020083e" alt="picture of web app horiseon refactor" class="w-full"  style={{width: "3000px" }}/>
                  <div class="hover-text">Horiseon Refactor(HTML & CSS)</div>
              </div>
          </a>
        </div> 
        <div class="carousel-item h-full">
        <a target="_blank" rel="noopener" href="https://github.com/LizaSmirnov/prework_study_guide_ucberk">
              <div class="image-container">
                  <img src="https://user-images.githubusercontent.com/122588135/215419355-5a98d369-d831-444c-9a48-17e95aaa3821.JPG" alt="picture of website and code" class="w-full"  style={{width: "2000px", height:"600px" }}/>
                  <div class="hover-text">PreWork Study Guide(HTML&CSS&JS)</div>
              </div>
          </a>
        </div> 
        <div class="carousel-item h-full">
        <a target="_blank" rel="noopener" href="https://camerong7.github.io/Forecast_Flix/">
              <div class="image-container">
                  <img src="https://user-images.githubusercontent.com/122588135/228051187-c4fcc27b-4c28-42aa-aa6d-4ebebd7e46a0.png" alt="image website forecast flix" class="w-full"  style={{width: "3000px" }}/>
                  <div class="hover-text">Forecast_Flix(API)</div>
              </div>
          </a>
        </div>
        <div class="carousel-item h-full">
            <a target="_blank" rel="noopener" href="https://sheltered-reef-22263.herokuapp.com/home">
              <div class="image-container w-full">
                  <img src="https://github.com/LizaSmirnov/portfolio_v2_react/assets/122588135/7b743bdf-6388-4945-983b-955faf96962c" alt="picture of website Reel Reviews" class="w-full"  style={{width: "3000px" }}/>
                  <div class="hover-text">Reel Reviews</div>
              </div>
          </a>
        </div>
        <div class="carousel-item h-1/2">
            <a target="_blank" rel="noopener" href="https://github.com/LizaSmirnov/ecommerce_backend/blob/main/README.md">
              <div class="image-container">
                  <img src="https://github.com/LizaSmirnov/portfolio_v2_react/assets/122588135/d521fe8e-4dab-4dab-8af0-beace969a78a" alt="picture of code" class="w-full"  style={{width: "3000px" }}/>
                  <div class="hover-text">Ecommerce Backend</div>
              </div>
          </a>
        </div>
</div>
</div>
</div>
    );
    }

export default Portfolio;
