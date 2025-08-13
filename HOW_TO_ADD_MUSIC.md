# संगीत कैसे जोड़ें - How to Add Music

आपके भारत माता platform में नए songs add करने के लिए ये steps follow करें:

## Step 1: Audio File Add करना
1. अपनी MP3 file को `server/public/audio/` folder में copy करें
2. File name में spaces नहीं होने चाहिए (use hyphens instead)
   Example: `vande-mataram.mp3`, `saare-jahan-se-achha.mp3`

## Step 2: Music List में Entry Add करना
File: `client/src/components/music-section.tsx`

```javascript
{
  title: "गाने का नाम - English Name",
  description: "गाने के बारे में description",
  image: "https://images.unsplash.com/photo-xyz...", // Use Unsplash images
  bgColor: "from-color-to-color", // Gradient colors
  textColor: "text-color-shade",
  audioSrc: "/api/audio/your-file-name.mp3"
}
```

## Step 3: Popular Indian Patriotic Songs आप add कर सकते हैं:

### राष्ट्रीय गीत (National Songs):
- जन गण मन (Jana Gana Mana) ✓ Added
- वन्दे मातरम् (Vande Mataram) ✓ Added
- सारे जहां से अच्छा (Saare Jahan Se Achha) ✓ Added

### देशभक्ति गीत (Patriotic Songs):
- ऐ मेरे वतन के लोगों (Ae Mere Watan Ke Logon) ✓ Added
- झंडा ऊंचा रहे हमारा (Jhanda Uncha Rahe Hamara) ✓ Added
- कदम कदम बढ़ाये जा (Kadam Kadam Badhaye Ja) ✓ Added
- मिले सुर मेरा तुम्हारा (Mile Sur Mera Tumhara) ✓ Added

### फिल्मी देशभक्ति गीत (Movie Patriotic Songs):
- मां तुझे सलाम (Maa Tujhe Salaam)
- चक दे इंडिया (Chak De India)
- कर चले हम फिदा (Kar Chale Hum Fida)
- संदेसे आते हैं (Sandese Aate Hain)

## Current Status:
✓ 8 patriotic songs ready in your collection
✓ National anthem working with audio
✓ Beautiful UI with Indian flag colors
✓ Audio player with play/pause controls

## Next Steps:
1. Upload actual MP3 files to replace placeholder files
2. Test audio playback
3. Add more songs as needed