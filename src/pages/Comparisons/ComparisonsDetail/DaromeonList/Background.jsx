import imageKenganSearchService from "../../../../services/imageKenganSearch.service"
function Backgroud(){
    const kBackgroudImages = imageKenganSearchService.getAllKbackgroud();
    const kCrowdImages = imageKenganSearchService.getAllKcrowd();
    return(
        <div>
            <h2 className="p-5 text-lg rounded-md">Backgroud</h2>
            <div>
                {kBackgroudImages.map((image, index) => (
                    <img key={index} className="w-96 p-2" src={image} alt={`K Backgroud ${index + 1}`} />
                ))}
            </div>
            <h2 className="p-5 text-lg rounded-md">Crowd</h2>
            <div>
                {kCrowdImages.map((image, index) => (
                    <img key={index} className="w-96 p-2" src={image} alt={`K Backgroud ${index + 1}`} />
                ))}
            </div>
        </div>
    )
}
export default Backgroud