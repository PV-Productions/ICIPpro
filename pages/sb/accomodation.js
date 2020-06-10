import React from "react";
import SBLayout from "../../components/SBLayout";

export default function accomodation() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
  return (
    <SBLayout>
      <div
        className="wrapperACC"
        style={{ width: wWidth > 560 ? "80vw" : "100vw", float: "right" }}
      >
        <h1 className="headerACC">Accomodation</h1>
        <div className="textAcc">
          <h1>The Leela Kempinski Palace ( 5 Star Deluxe Hotel )</h1>
          Address: 23, Airport Road, Bangalore Location: City Center Property
          Type: Business And Leisure Hotel The Leela Kempinski Palace is
          situated on Airport Road, it is in close proximity to the Business
          district and an easy stroll from the KGA golf course. It stands
          majestically amidst seven acres of lush gardens and a sparkling lagoon
          in the garden city of Bangalore. The Leela Palace has all the
          attributes of comfort, technology and design associated with one of
          the leading hotels of the world.
          <hr />
          <h1>Le Meridien Bangalore ( 5 Star Hotel )</h1>
          Address: 28, Sankey Road, , Bangalore Location: City Center Property
          Type: Business And Leisure Hotel Le Meridien, Bangalore is situated
          opposite the lush green Golf Course on Sankey Road. It's close
          proximity to the city's business district and commercial areas make it
          the perfect choice for business & leisure travellers. The stay at Le
          Meridien, Bangalore is an experience in itself.
          <hr />
          <h1>Taj Residency ( 5 Star Hotel )</h1>
          Address: 41/3, M.G. Road, Bangalore Location: City Center Property
          Type: Business And Leisure Hotel Located in the heart of Bangalore,
          with a spectacular view of the city and the Ulsoor lake, the hotel is
          equipped with comprehensive business facilities to cater to the needs
          of discerning business clientele.
          <hr />
          <h1>Hotel Ashok ( 5 Star Hotel )</h1>
          Address: Kumara Krupa, High Grounds, , Bangalore Location: City Center
          Property Type: Business And Leisure Hotel The gentle, graceful
          ambience of Bangalore, India's garden city, is amply reflected in its
          first 5-star hotel - Hotel Ashok - one of the finest luxury hotels in
          southern India. Located on ten spacious acres in the High Grounds area
          of Bangalore, Hotel Ashok overlooks the green expanse of the adjoining
          golf Course and is within easy reach of the bustling business and
          shopping districts of the city.
          <hr />
          <h1>The Park ( 5 Star Hotel )</h1>
          Address: 14 / 7, Mahatama Gandhi Road, , Bangalore Location: City
          Center Property Type: Business And Leisure Hotel The Park is a good
          destination choice for corporate and leisure travellers due to its
          downtown location, giving easy access to key commercial &
          entertainment districts. The Park Kensington Terrace hotel services
          are excellent and the interiors are impressive and comfortable.
          <hr />
          <h1>Gateway Hotel ( 5 Star Hotel )</h1>
          Address: No - 66, Residency Road, , Bangalore Location: City Center
          Property Type: Business And Leisure Hotel Gateway Hotel on Residency
          Road is located 8 km from the airport and 7 km from the railway
          station. The hotel is in the heart of the business, shopping and
          entertainment district of Bangalore.
          <hr />
          <h1>ITC Hotel Windsor Sheraton ( 5 Star Hotel )</h1>
          Address: No. 25, Golf Course Road, , Bangalore Location: City Center
          Property Type: Business And Leisure Hotel Downtown location, close to
          the prominent business and commercial areas. Near the historic
          landmark Vidhana Soudha and opposite the Bangalore golf course. It is
          just 12 km from the airport, 4 km from the railway station and 5 km
          from the city centre.
          <hr />
          <h1>St. Mark's Hotel ( 4 Star Hotel )</h1>
          Address: 4 / 1, St. Mark's Road, , Bangalore Location: City Center
          Property Type: Business And Leisure Hotel Business lunches. Client
          meetings. Quick thinking. We know what it is to be a business
          traveller - the reason why we have created the right ambience for you,
          So you can relax and work with ease. It is situated in heart of the
          city we not only provide you with excellent services, but also the
          perfect infrastructure. Beside well furnished rooms and recreational
          facilities. We also have a full fladged business centre and banquet
          halls. All of which helps you conduct business with ease and
          sophistication.
          <hr />
          <h1>The Atria Hotel ( 4 Star Hotel )</h1>
          Address: P. O. Box - 5089, No - 1, Palace Road , Bangalore Location:
          City Center Property Type: Business And Leisure Hotel When business
          brings you to the garden city, there's one hotel an astute business
          traveller like yourself would be pleased to check into. The hotel that
          makes better sense, which ever way you look at it.
          <hr />
          <h1>Royal Orchid Park Plaza ( 4 Star Hotel )</h1>
          Address: 1, Golf Avenue, Adjoining - KGA Golf Course, Airport Road ,
          Bangalore Location: Near Airport Property Type: Business And Leisure
          Hotel India's Silicon Valley, the beautiful city of Bangalore,
          witnesses yet another Landmark-Royal Orchid Park Plaza. Overlooking
          the lush greens of the KGA Golf Course, Royal Orchid Park Plaza offers
          the discerning corporate traveler and privileged business person.
          Located just five minutes from the Airport, the hotel is conveniently
          close to major software corridors and IT companies. It is just three
          kilometers from the main commercial hub-MG Road.
          <hr />
          <h1>The Chancery ( 4 Star Hotel )</h1>
          Address: Lavelle Road, Bangalore , Bangalore Location: City Center
          Property Type: Business And Leisure Hotel We understand that you as a
          professional, need both space and attention. And that there are no
          defined moments of rest and toil. We kept that in mind when we
          designed The Chancery.
          <hr />
          <h1>The Capitol ( 4 Star Equivalent Hotel )</h1>
          Address: No. 3, Rajbhavan Road, , Bangalore Location: City Center
          Property Type: Business And Leisure Hotel At The Capitol Hotel, you'll
          experience the epitome of timeless elegance and impeccable service. In
          fact, we've been Arkansas's most award-winning hotel for more years
          than we can recall. Then again, we are well over 100 years old.
          Steeped in history, as you step into our lobby, you'll feel like
          you're stepping back to 1876. Now graciously restored, you'll find 126
          luxurious rooms, including five suites, blending turn-of-the-century
          charm with the New World amenities expected of an intimate luxury
          hotel. Indeed, The Capitol Hotel is a place where you can live in the
          moment or stay a century away.
          <hr />
          <h1>The Central Park ( 3 Star Hotel )</h1>
          Address: No.47, Dickenson Road, Manipal Centre, , Bangalore Location:
          City Center Property Type: Business And Leisure Hotel The Central Park
          hotel beckons leisure travlers and the business travellers alike for a
          comfortable stay in Bangalore. The Central Park hotel caters to the
          needs of the discerning business travellers and helps them conduct
          business in American style-quickly and efficiently.
          <hr />
          <h1>Museum Inn Hotel ( 3 Star Hotel )</h1>
          Address: No.1, Museum Road, Opp. M.G.Road , Bangalore Location: City
          Center Property Type: Business And Leisure Hotel Museum Inn Hotel is
          ideally located in city amidst corporate houses. It is just 4 kms from
          Airport and 2 kms from Railway Station.
          <hr />
          <h1>Hotel Samrat Residency ( 3 Star Hotel )</h1>
          Address: 173/1, S.C. Road, Seshadri Puram, , Bangalore Location: City
          Center Property Type: Motel Accessibility: Airport: 10KM., Railway
          Station: 2KM., Bus Station: 2KM.
          <hr />
          <h1>Harsha Park Inn International ( 3 Star Hotel )</h1>
          Address: Park Road, , Bangalore Location: City Center Property Type:
          Business And Leisure Hotel The Harsha Park Inn International is the
          most centrally located business hotel in Bangalore. It is easily
          accessible from the M.G. Road, the railway station and the airport.
          <hr />
          <h1>Bush Betta Wild Life Adventure Resorts ( 3 Star Hotel )</h1>
          Address: No.3, President Chambers, 8 Richmond Road, , Bangalore
          Location: City Center Property Type: Business And Leisure Hotel Bush
          Betta Wild Life Adventure Resorts is located 85 Km away from Air Port,
          80 Km from Railway Station and 20 Km from Bus stand.
          <hr />
          <h1>Nahar's Heritage Hotel ( 3 Star Hotel )</h1>
          Address: No.14, St. Mark's Road, , Bangalore Location: City Center
          Property Type: Business And Leisure Hotel Nahar's Heritage Hotel is a
          leading heritage hotel in Bangalore. So for all those of you seeking a
          royal stay in Bangalore Nahar's heritage Hotel is the ideal
          accommodation option. The entire experience of staying at the Nahar's
          heritage Hotel lends a color to the visit to Bangalore.
          <hr />
          <h1>Sovereign The Heritage Hotel ( 3 Star Hotel )</h1>
          Address: No. 19 & 20, 3rd Main, Gandhinagar , Bangalore Location: City
          Center Property Type: Business And Leisure Hotel Located in the heart
          of downtown Bangalore, one of India"s most important business cities.
          Just a kilometre away from the railway station and 16 kms from the
          airport, the hotel is also close to a number of corporate houses and
          business districts and near several shopping centres and cinema halls.
          <hr />
          <h1>Nalapads Hotels Bangalore International ( 3 Star Hotel )</h1>
          Address: 2A - 2B, Crescent Avenue, High Grounds , Bangalore Location:
          Suburban Property Type: Business And Leisure Hotel Hotel Bangalore
          International with its distinctive architecture and superior
          facilities is a land mark in the sprawling garden city.
          <hr />
          <h1>Hotel Royal Heritage ( 3 Star Hotel )</h1>
          Address: 34/c, Austin Town Extn., Near BDA Complex, Next to SBI,
          Austin Town , Bangalore Location: City Center Property Type: Heritage
          Hotel Situated in the midst of IT capital of India Bangalore, Hotel
          Royal Heritage"s perfect location is extremely advantageous to every
          business or leisure traveler.
          <hr />
          <h1>Comfort Inn Infantry Court ( 3 Star Hotel )</h1>
          Address: 66, Infantry Road, Gem Plaza , Bangalore Location: City
          Center Property Type: Business And Leisure Hotel Centrally located on
          Infantry Road, in the heart of the commercial centre and downtown,
          Bangalore.
          <hr />
          <h1>Comfort Inn Vijay Residency ( 3 Star Hotel )</h1>
          Address: No. 18, III Main Road (Hotel's street), Gandhinagar ,
          Bangalore Location: City Center Property Type: Business And Leisure
          Hotel The hotel is franchised and manged by Choice Hotels
          International, USA which is one of the largest chains in the world
          having strong presence with 5000 hotels in 37 countries. It is
          centrally located at main business hubs of the Garden City at a close
          proximity of Bangalore Railway Station. It has long cherished its
          reputation as a most professionally run hotel acclaimed to symbolize
          its image by having maximum repeat guests and regular patronage frome
          corporates, pharmaceuticals, PSUs, banks etc.
          <hr />
          <h1>Ashraya International ( 3 Star Equivalent Hotel )</h1>
          Address: 149, Infantry Road, , Bangalore Location: City Center
          Property Type: Business And Leisure Hotel
          <hr />
          <h1>Highgates Hotel ( 3 Star Equivalent Hotel )</h1>
          Address: No. 33, Church Street, Off. M.G. Road, , Bangalore Location:
          City Center Property Type: Business And Leisure Hotel
          <hr />
          <h1>Eagleton - The Golf Resort ( 3 Star Equivalent Hotel )</h1>
          Address: 30th km., Bangalore - Mysore Highway, Shyawamangala Cross,
          Bidadi Industrial Area , Bangalore Location: City Center Property
          Type: Business And Leisure Hotel
          <hr />
          <h1>The Richmond Hotel ( 3 Star Equivalent Hotel )</h1>
          Address: 88/2, Richmond Road, Richmond Town, , Bangalore Location:
          City Center Property Type: Business And Leisure Hotel
          <hr />
          <h1>Hotel Chalukya ( 3 Star Equivalent Hotel )</h1>
          Address: 44, Race Course Road, Basaveswara Circle , Bangalore
          Location: City Center Property Type: Business And Leisure Hotel
          <hr />
          <h1></h1>Hotel Swagath ( 3 Star Equivalent Hotel ) Address: 75,
          Hospital Road, , Bangalore Location: City Center Property Type:
          Business And Leisure Hotel
          <hr />
          <h1></h1>Hotel Rama ( 3 Star Equivalent Hotel ) Address: 40 / 2,
          Lavelle Road, , Bangalore Location:City Center Property Type: Business
          And Leisure Hotel After a hard day"s work, unwind in the city pubs and
          enjoy the exciting evenings of glamorous Bangalore. Besides the
          magnificient Vidhana Soudhan (State Legislature & Secretariat), Tipu
          Sultan's Summer Palace & Bannerghatta National Park for exciting Tiger
          & Lion Safaris, there's also the famous Derby!
        </div>
        <style jsx>
          {`
            .wrapperACC {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 12vh;
              flex-wrap: wrap;
              overflow: hidden;
            }
            .headerACC {
              width: 100%;
              font-size: 72px;
              text-align: center;
              background-color: lightgray;
              color: white;
              box-shadow: 2px 2px 10px 5px rgba(220, 220, 220, 0.5);
            }
            .textAcc {
              width: 80%;
              padding: 50px;
            }
          `}
        </style>
      </div>
    </SBLayout>
  );
}
