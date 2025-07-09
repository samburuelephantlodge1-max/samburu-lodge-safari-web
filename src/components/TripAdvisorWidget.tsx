import { useEffect } from 'react';

const TripAdvisorWidget = () => {
  useEffect(() => {
    // Load TripAdvisor script if not already loaded
    const existingScript = document.querySelector('script[src*="jscache.com/wejs"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.async = true;
      script.src = "https://www.jscache.com/wejs?wtype=cdsratingsonlynarrow&uniq=135&locationId=24053068&lang=en_US&border=true&display_version=2";
      script.setAttribute('data-loadtrk', '');
      script.onload = function() {
        (this as any).loadtrk = true;
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="flex justify-center my-4">
      <div id="TA_cdsratingsonlynarrow135" className="TA_cdsratingsonlynarrow">
        <ul id="vTOMXW" className="TA_links XGhvEMK4Jd">
          <li id="iP6lhe" className="YiteQE">
            <a 
              target="_blank" 
              rel="noopener noreferrer"
              href="https://www.tripadvisor.com/Hotel_Review-g298254-d24053068-Reviews-Samburu_Elephant_Lodge-Samburu_National_Reserve_Samburu_District_Rift_Valley_Province.html"
            >
              <img 
                src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-18034-2.svg" 
                alt="TripAdvisor" 
                className="max-h-8"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TripAdvisorWidget;