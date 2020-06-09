import React from 'react'
import SBLayout from '../../components/SBLayout'
import Navbar from '../../components/Navbar';
export default function guidelines() {
    const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
    return (
       <>
        
            <SBLayout>
                <div className="wrapperGUI"style={{ width: wWidth > 560 ? "80vw" : "100vw", float: "right" }}>
                      <h1 className="headerG">
                        Author Guidelines
                      </h1>
                    <div className="textG">
                    General Instructions
                      1. Prepare the paper in Latex/ MS word and submit the PDF copy.

                      2. Check the spelling mistakes using spell check.

                      All papers must conform, at time of submission, to the IEEE Formatting Guidelines. Please use either this Word Template or this Latex package. Make sure that you produce the final PDF in A4 size with 1.7cm margins on all sides.

                      Points to note on formatting your MS Word file
                      Files should be in MS Word format only and should be formatted for direct printing, using the IEEE MS Word template provided. Figures and tables should be embedded and not supplied separately.

                      Please make sure that you use as much as possible normal fonts in your documents. Special fonts may cause problems during processing. To avoid unnecessary errors you are strongly advised to use the 'spellchecker' function of MS Word. Do not make any changes to the structure of the template as this can lead to production errors.

                      Paper structure

                      Papers should be prepared in the following order:

                      Introduction: to explain the background work, the practical applications and the nature and purpose of the paper.

                      Body: to contain the primary message, with clear lines of thought and validation of the techniques described.

                      Conclusion

                      Acknowledgements (when appropriate)

                      References

                      Appendices (when appropriate)

                      Section headings: should be left justified, with the first letter capitalised and numbered consecutively, starting with the Introduction. Sub-section headings should be in capital and lower-case italic letters, numbered 1.1, 1.2, etc, and left justified, with second and subsequent lines indented.

                      3. Formatting your document

                      Please do not alter the formatting and style layouts which have been set up in the template document.
                      As indicated in the template, papers should be prepared in two column format. Do not number pages on the front, as page numbers will be added separately for the preprints and the Proceedings. Leave a line clear between paragraphs. All the required style templates are provided in the file â€œMS Word Templateâ€ with the appropriate name supplied.

                      i. Title page

                      The first page should include:

                      (a) Title
                      Click on the existing text and enter the title of the paper using sentence case.

                      (b) Each author's name and affiliation, including present address
                      Authors' names: Remember to include the correct superscript linking to the appropriate affiliation details. Affiliations: Remember to include the correct superscript linking to the appropriate author details.

                      (c) Abstract (50-100 words)
                      Insert an abstract of 50-100 words, giving a brief account of the most relevant aspects of the paper.

                      (e) Keywords (5-10)
                      Insert 5-10 keywords.


                      Please follow the template style for all the above features.

                      ii. Tables

                      All tables should be numbered with Arabic numerals. Headings should be placed above tables, left justified. Leave one line space between the heading and the table. Only horizontal lines should be used within a table, to distinguish the column headings from the body of the table, and immediately above and below the table. Tables must be embedded into the text and not supplied separately.

                      iii. Illustrations
                      All figures should be numbered with Arabic numerals (1, 2, ...). All photographs, schemas, graphs and diagrams are to be referred to as figures. Line drawings should be good quality scans or true electronic output. Low-quality scans are not acceptable. Figures must be embedded into the text and not supplied separately. Lettering and symbols should be clearly defined either in the caption or in a legend provided as part of the figure. Figures should be placed at the top or bottom of a page wherever possible, as close as possible to the first reference to them in the paper. The figure number and caption should be typed below the illustration in 9pt and left justified. For further guidelines and information to help you submit high quality artwork please visit here. Artwork has no text along the side of it in the main body of the text. However, if two images fit next to each other, these may be placed next to each other to save space.

                      iv. Equations
                      Equations and formulae should be typed in Mathtype, and numbered consecutively with Arabic numerals in parentheses on the right hand side of the page (if referred to explicitly in the text). They should also be separated from the surrounding text by one space.

                      v. References
                      In the text the number of the reference should be given in square brackets. For references with more than two authors, text citations should be shortened to the first name followed by et al., e.g. Jones [1] discovered that...; Recent results from Brown and Carter [2] and Green et al. [3] indicate that (...). Only essential references, which are directly referred to in the text, should be included in the reference list. References must be listed in numerical order at the end of the paper. Do not begin them on a new page unless this is absolutely necessary. They should be prepared according to the sequential numeric system making sure that all material mentioned is generally available to the reader. Journal references should include: author's surname and initials; initials and surnames of remaining authors; article title (where provided); abbreviated journal title (in italics), year of publication, volume number and page numbers. References to books should include: author's surname and initials; surnames and initials of remaining authors; the book title (in italics); the place of publication and the name of the publisher; and year of publication. References to multi-author works should include author.s surname(s) and initials, the chapter title (where provided); "In:" followed by book title (in italics); initials and name(s) of editors(s) in brackets; volume number and pages; the place of publication and name of the publisher, followed by the year of publication. Here is an example of some references listed according to the sequential numeric system:

                      [1] G. Eason, B. Noble, and I. N. Sneddon, "On certain integrals of Lipschitz-Hankel type involving products of Bessel functions," Phil. Trans. Roy. Soc. London, vol. A247, pp. 529-551, April 1955.
                      [2] J. Clerk Maxwell, A Treatise on Electricity and Magnetism, 3rd ed., vol. 2. Oxford: Clarendon, 1892, pp.68-73.
                      [3] I. S. Jacobs and C. P. Bean, â€œFine particles, thin films and exchange anisotropy,â€ in Magnetism, vol. III, G. T. Rado and H. Suhl, Eds. New York: Academic, 1963, pp. 271-350.

                      vi. Footnotes

                      Footnotes should be avoided if possible. Necessary footnotes should be denoted in the text by consecutive superscript letters. The footnotes should be typed single spaced, and in smaller type size (8pt), at the foot of the page in which they are mentioned, and separated from the main text by a short line extending at the foot of the column. The .Els-footnote. style is available in the â€œMS Word Templateâ€ for the text of the footnote.
                      Please do not change the margins of the template as this can result in the footnote falling outside printing range.

                      vii. General guidelines for the preparation of your text
                      Avoid hyphenation at the end of a line. Symbols denoting vectors and matrices should be indicated in bold type. Scalar variable names should normally be expressed using italics. Weights and measures should be expressed in SI units. All non-standard abbreviations or symbols must be defined when first mentioned, or a glossary provided.

                      4. Online licence transfer

                      IEEE policy requires that prior to publication all authors or their employers must transfer to the IEEE in writing any copyright they hold for their individual papers. Please visit the following URL to learn more about securing copyright transfer, and to register your interest in using the electronic IEEE Copyright Form for your conference. http://www.ieee.org/web/publications/rights/copyrightmain.html

                      The appropriate copyright clearance code notice is to appear on the bottom of the first page of each paper according to the guidelines set forth in the Cataloging/Copyright Instructions for an IEEE Conference Proceeding. Detailed instructions can be found at: http://www.ieee.org/portal/pages/about/documentation/copyright/cfrmlink.html.

                      Authors must sign their copyright form via IEEE eCopyright service. You will notified about this form once the paper has been accepted for publication.

                      5. In conclusion
                      We wish you success with your publication. Should you experience any difficulties during the preparation of your paper, please contact the Publication Chair for further information.
                    </div>
                    <style jsx>
                      {`
                        .wrapperGUI{
                          display:flex;
                          justify-content:center;
                          align-items:center;
                          flex-wrap:wrap;
                          margin-top:15vh;
                        }
                        .headerG {
                          width: 100%;
                          font-size:72px;
                          text-align:center;
                          background-color: lightgray;
                          color: white;
                          box-shadow: 2px 2px 10px 5px rgba(220, 220, 220, 0.5);
                        }
                        .textG{
                          width:80%;
                          padding:30px;
                        }
                      `}
                    </style>
                </div>
            </SBLayout>
      </>
    )
}