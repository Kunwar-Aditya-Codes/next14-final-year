import { Ollama } from '@langchain/community/llms/ollama';
import { NextRequest } from 'next/server';

interface ImageData {
  imageData: string;
  question: string;
}

export const POST = async (req: NextRequest) => {
  const data: ImageData = await req.json();


  const ollama = new Ollama({
    baseUrl: 'http://localhost:11434',
    model: 'llava:latest',
  }).bind({
    images: [data.imageData]
  })



  const stream = await ollama.stream(data.question);

  

  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }

  const answer = chunks.join('');

  console.log(answer)

  return Response.json({answer});
};