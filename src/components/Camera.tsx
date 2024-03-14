'use client';

import { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const Camera = () => {
  const webcamRef = useRef<Webcam>(null);
  const [imageData , setImageData] = useState<string>()
  const [response , setRespose] = useState<string>("")
  const [question , setQuestion] = useState<string>("");

  const [isLoading , setIsLoading] = useState<boolean>(false)

  const capture = useCallback(async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot() as string;

      setImageData(imageSrc)

    }
  }, [webcamRef]);




  const handleSubmit = async() => {

    setIsLoading(true);

    if(!imageData){
        setIsLoading(false);
        window.alert("No image captured")
        return;
    }

    if(!question) {
        setIsLoading(false);
        window.alert("Empty field!")
        return;
      }

      const base64EncodedImage = imageData.split("data:image/jpeg;base64,")[1];

      const res: any = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageData: base64EncodedImage  , question}),
      });

     const ans = await res.json()

      setRespose(ans.answer);

      setIsLoading(false)
  }



  return (
    <div className='flex flex-col gap-y-5'>

        {imageData ? <img src={imageData} className='w-[50rem] h-[35rem] object-cover rounded-md'/> : (
            <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            className='rounded-sm'
            screenshotFormat='image/jpeg'
            videoConstraints={{
              facingMode: {
                
                // user - for front camera
                // environment - for back camera
              },
            }}
            width={800}
          />
        )}
      


    <button
        onClick={capture}
        className='bg-white/10 rounded-lg border text-base px-4 py-2 '
      >
        Capture
      </button>
      
      <input type="text" 
      placeholder='Ask your question?' 
      className='rounded-md text-white bg-transparent border border-zinc-600 text-lg py-2 px-3' 
      value={question} 
      onChange={(e) => setQuestion(e.target.value)}/>

      
      
      <button
        onClick={handleSubmit}
        className='bg-white/10 rounded-lg border text-base px-4 py-2 '
      >
        Submit
      </button>
        <div className='mt-28'>
               
       {isLoading ? <p className='text-center text-white animate-pulse text-lg'>Fetching response...</p> : null}     
      {(!isLoading && response)? <p className='text-white text-lg text-justify'>{response}</p> : null}
      </div> 

    </div>
  );
};

export default Camera;