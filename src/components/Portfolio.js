const DownloadButton = () => {
  const handleDownload = () => {
    // Replace "link-to-your-google-docs-file" with the actual Google Docs link
    const fileUrl = "https://docs.google.com/document/d/1_3V0JTNbR5g7-JvYwKB0iVuq9R8twpjxU7L1fG0c2pI/edit?usp=sharing";
  
    // Create a temporary anchor element
    const downloadLink = document.createElement("a");
    downloadLink.href = fileUrl;
    downloadLink.download = "document.pdf"; // Set the desired file name with extension
  
    // Programmatically click the anchor element to trigger the download
    downloadLink.click();
  };


  return (
    <button class="btn btn-outline btn-secondary max-w-xs" onClick={handleDownload}>
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
    <button class="btn btn-outline btn-secondary max-w-xs" onClick={handleView}>
      View
    </button>
  );
};


 





const Portfolio= () => {
    return (
      <div class="card ">
      <div class="card-body">
        <h2 class="card-title justify-center text-5xl">My Resume</h2>
        <div class="card-actions justify-center">
          <ViewButton />
          <DownloadButton />
        </div>
      </div>
        <div class='card-item h-full'>
          <h2 className="card-title flex justify-center items-center text-5xl" style={{ paddingTop: '30px' }}>Portfolio</h2>
          <p class='portfolio sub-title bg-secondary text-center'>Please scroll through the Projects</p>
      <div class="h-96 carousel carousel-vertical">
      <div class="carousel-item h-full">
          <a target="_blank" rel="noopener" href="https://github.com/LizaSmirnov/professional_portfolio">
              <div class="image-container">
                  <img src="https://github.com/LizaSmirnov/professional_portfolio/assets/122588135/91dc9214-9f73-4e51-be8d-cd86076842db" alt="picture of a bad portfolio website" class="w-full" style={{width: "2000px", paddingTop: '30px' }} />
                  <div class="hover-text">Professional Portfolio Version 1</div>
            </div>
          </a>
      </div> 
      <div class="carousel-item h-full">
        <a target="_blank" rel="noopener" href="https://github.com/LizaSmirnov/horiseon_refactor">
              <div class="image-container">
                  <img src="https://user-images.githubusercontent.com/122588135/219286287-abee4dec-8371-4cc9-ac31-ef362e2225ec.jpg" alt="picture of rose" class="w-full" />
                  <div class="hover-text">Horiseon Refactor(HTML & CSS)</div>
              </div>
          </a>
        </div> 
        <div class="carousel-item h-full">
        <a target="_blank" rel="noopener" href="https://github.com/LizaSmirnov/prework_study_guide_ucberk">
              <div class="image-container">
                  <img src="https://user-images.githubusercontent.com/122588135/219286287-abee4dec-8371-4cc9-ac31-ef362e2225ec.jpg" alt="picture of rose" class="w-full" />
                  <div class="hover-text">PreWork Study Guide(HTML&CSS&JS)</div>
              </div>
          </a>
        </div> 
        <div class="carousel-item h-full">
        <a target="_blank" rel="noopener" href="https://camerong7.github.io/Forecast_Flix/">
              <div class="image-container">
                  <img src="https://user-images.githubusercontent.com/122588135/219286287-abee4dec-8371-4cc9-ac31-ef362e2225ec.jpg" alt="picture of rose" class="w-full" />
                  <div class="hover-text">Forecast_Flix(API)</div>
              </div>
          </a>
        </div>
        <div class="carousel-item h-full">
            <a target="_blank" rel="noopener" href="https://sheltered-reef-22263.herokuapp.com/home">
              <div class="image-container w-full">
                  <img src="https://user-images.githubusercontent.com/122588135/219286287-abee4dec-8371-4cc9-ac31-ef362e2225ec.jpg" alt="picture of rose" class="w-full" />
                  <div class="hover-text">Reel Reviews</div>
              </div>
          </a>
        </div>
        <div class="carousel-item h-1/2">
            <a target="_blank" rel="noopener" href="https://github.com/LizaSmirnov/ecommerce_backend/blob/main/README.md">
              <div class="image-container">
                  <img src="https://user-images.githubusercontent.com/122588135/219286287-abee4dec-8371-4cc9-ac31-ef362e2225ec.jpg" alt="picture of rose" class="w-full" />
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
