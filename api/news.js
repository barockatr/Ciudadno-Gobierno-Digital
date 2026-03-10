export default async function handler(req, res) {
    const API_KEY = process.env.GNEWS_API_KEY || process.env.VITE_GNEWS_API_KEY;
    const url = `https://gnews.io/api/v4/top-headlines?country=mx&lang=es&max=9&token=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Si GNews devuelve error, lo propagamos
        if (!data.articles) {
            console.error('GNews response:', JSON.stringify(data));
            return res.status(500).json({ error: 'Invalid response from GNews', details: data });
        }
        
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch news' });
    }
}
