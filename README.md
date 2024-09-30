# KidoHelp Website

## Description
This is a charity website built by Ng Wei Jie and other interns at Kidocode for the KidoHelp charity program. The website was originally based on an existing Bootstrap template but has been entirely rewritten from scratch to add new components such as card carousels, masonry galleries, an interactive contact section, and more. The website has been optimized to improve load times and SEO performance by converting image files to the WebP format (with fallbacks to PNG or JPG). Additionally, SEO meta tags have been incorporated.

Link to the GitHub repository: [KidoHelp Website GitHub Repository](https://github.com/NgWJ422/shelter_web_v2)

---

## Adoption Instructions

### 1. Replace Web3Forms Access Key
The contact form on the website relies on Web3Forms for handling submissions. Follow these steps to update the access key:
- Go to: [Web3Forms](https://web3forms.com/)
- Obtain a new access key for the KidoHelp charity program.
- Replace the existing access key in the following files:
  - `index.html`
  - `index-bm.html`
  - `index-cn.html`
  Look for the contact section in these files and substitute the placeholder key with your new access key.

### 2. Review Website Content
Please thoroughly review the entire website, especially the **Past Activities** and **FAQ** sections:
- **Past Activities Section**: Currently, this section has minimal information. You may need to update it with more detailed descriptions of past charity events and activities.
- **FAQ Section**: The FAQ content was initially generated using AI (ChatGPT), so it is recommended to verify the accuracy and relevance of the information presented.

### 3. Check Language Translations
The website has been translated into different languages, including Malay (Bahasa Melayu) and Chinese. However, these translations were done using ChatGPT, so manual review is necessary to ensure correctness and cultural appropriateness.

The files with translations are:
- `index-bm.html` (Malay)
- `index-cn.html` (Chinese)

Please review the content carefully to ensure proper translation.

### 4. Content Layout Verification
Review the layout of all pages to ensure that the content is displayed correctly across different screen sizes and devices. Pay special attention to the following sections:
- **Card Carousels**
- **Masonry Gallery**
- **Interactive Contact Section**
  
Make sure that all elements are properly aligned and visually appealing across various devices (e.g., mobile, tablet, and desktop).

### 5. Update Alt and Data-Caption Attributes
The website uses alt attributes for accessibility and data-caption attributes for the lightbox effect in image galleries (FancyBox). Currently, these attributes contain placeholder text such as:
- `"Gallery Full 4"`
- `"FB-Gallery 4"`

Please review all images and anchor tags throughout the website and update the alt and data-caption attributes with more meaningful and descriptive text to enhance user experience and accessibility.

---

## Additional Notes
- **SEO Optimization**: The website is equipped with SEO meta tags. You may review and optimize them further if necessary.
- **Image Optimization**: The images are primarily in WebP format, which improves load times. However, fallback options (PNG/JPG) are provided for browsers that do not support WebP.

Feel free to further customize the website to fit the specific needs of the KidoHelp charity program.

--- 
By Ng Wei Jie