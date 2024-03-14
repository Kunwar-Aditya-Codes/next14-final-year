import { Ollama } from '@langchain/community/llms/ollama';
import { NextRequest } from 'next/server';

interface ImageData {
  imageData: string;
  question: string;
}

export const POST = async (req: NextRequest) => {
  try {
    const data: ImageData = await req.json();

    const llava = new Ollama({
      baseUrl: 'http://localhost:11434',
      model: 'llava:latest',
    }).bind({
      images: [data.imageData]
    })

    const llavaStream = await llava.stream(`Answer this question from the provided image - "${data.question}". Don't add extra response. Answer only what is asked`);
    const llavaAnswer = await streamToString(llavaStream);

    const mistral = new Ollama({
      baseUrl: 'http://localhost:11434',
      model: 'mistral:latest',
    });

    const mistralStream = await mistral.stream(`Take this as input - "${llavaAnswer}" and answer this question from the provided input - "${data.question}"`);
    const mistralAnswer = await streamToString(mistralStream);

    console.log('LLava Answer:', llavaAnswer);
    console.log('Mistral Answer:', mistralAnswer);

    return Response.json({ success: true  , answer: llavaAnswer});
  } catch (error) {
    console.error('Error:', error);
    return Response.json({ success: false, error: 'Unknown error' }, { status: 500 });
  }
};

async function streamToString(stream: any) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return chunks.join('');
}
