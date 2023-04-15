import base64ArrayBuffer from 'base64-arraybuffer';

export async function classifyImage(imageFile) {
  if (!imageFile) return null;

  const reader = new FileReader();
  const base64Data = await new Promise((resolve) => {
    reader.onload = () => {
      resolve(reader.result.split(',')[1]);
    };
    reader.readAsDataURL(imageFile);
  });

  const url = 'https://vijaydhanda-birdclassifier2.hf.space/run/predict';

  const json_data = {
    data: [`data:image/jpeg;base64,${base64Data}`],
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json_data),
    });

    if (response.ok) {
      const responseData = await response.json();
      return responseData.data;
    } else {
      throw new Error('Error in API call');
    }
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function fetchBirdDetails(birdName) {
  const response = await fetch(`mdfiles/${birdName}.md`);
  const mdContent = await response.text();
  return mdContent;
}
