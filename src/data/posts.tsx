import TextPost from '@/components/TextPost';
import VideoPost from '@/components/VideoPost';

export class TextPostData {
  constructor(public title: string, public tag: tag, public body: JSX.Element) {
  }
}

export class VideoPostData {
  constructor(public title: string, public url: string, public description: string | JSX.Element,
              public frameClass: string = '', public tag: tag = 'visual') {
  }
}

const PlainLink = ({href}: { href: string }) => <a href={href}>{href}</a>

type PostData = TextPostData | VideoPostData;

const PostItems: PostData[] = [
  new VideoPostData('Foo Fighters - The Teacher', 'https://www.youtube.com/embed/6MF6trC529M', 'From the album \'But Here We Are\' // Available June 2nd. Editing & VFX by Jack Colton and Tony Oursler', 'pb-3'),
  new VideoPostData('Hollow Earth: Art, Caves & The Subterranean Imaginary',
    'https://www.youtube.com/embed/XnODiOKlTOc',
    <p>Mixing and editing. <a
      href='https://www.nottinghamcontemporary.org/whats-on/hollow-earth-art-caves-the-subterranean-imaginary'>Hollow
      Earth: Art, Caves & The Subterranean Imaginary</a></p>,
    'pb-3', 'sound, visual'),
  new TextPostData('STALK, 2021', 'sound',
    <p><a href='https://www.performa2021.org/artists/ericka-beckman'>Ericka Beckman Artist Profile. STALK, 2021.</a></p>
  ),
  new VideoPostData('Sometimes It Snows In April', 'https://player.vimeo.com/video/473427165', ''),
  new VideoPostData('Line Drawing', 'https://player.vimeo.com/video/531804034', '', ''),
  new VideoPostData('Modern Alchemy, 2022', 'https://www.youtube.com/embed/CtkajwhHf_U', ''),
  new VideoPostData('Xiaomi x Daniel Arsham Advertisement, 2022', 'https://www.youtube.com/embed/uuKWF6YOSEI', ''),
  new TextPostData('Tiffany & Co. x Daniel Arsham Advertisement', 'visual',
    <p><a href='https://www.tiffany.com/stories/guide/daniel-arsham-x-lock/'>Tiffany & Co. x Daniel Arsham
      Advertisement, 2022.</a></p>
  ),
  new VideoPostData('Xiaomi x Daniel Arsham Advertisement, 2022', 'https://player.vimeo.com/video/471608261', ''),
  new VideoPostData('Ghost Presences, 2021', 'https://player.vimeo.com/video/592753419',
    <p>From <a href='https://www.movementwithoutborders.com/'>Movement Without Borders</a></p>
  ),
  new TextPostData('Verbolect, 2017', 'installation',
    <div>
      <p><a href='https://eliasjarzombek.com/verbolect/'>Verbolect</a></p>
      <p><a href='https://www.nytimes.com/2017/11/08/arts/design/what-to-see-in-new-york-art-galleries-this-week.html/'>NY
        Times: What to See in New York Art Galleries This Week</a></p>
      <p><a href='https://www.pierogi2000.com/2017/08/noncore-projector-at-the-boiler/'>NonCoreProjector at The
        BOILER</a></p>
      <p><a href='https://www.plexusprojects.org/programming/2019-noncoreprojector'>NONCOREPROJECTOR: VERBOLECT</a></p>
      <p><a href='https://www.johnjoconnor.net/ncp/project-one-yja5b'>Verbolect at The BOILER</a></p>
    </div>
  ),
  new TextPostData('Vec Tor Bel, 2018', 'installation',
    <div>
      <p><a href='https://false-flag.org/noncoreprojector/'>Vec Tor Bel at False Flag</a></p>
      <p><a href='https://www.johnjoconnor.net/ncp/project-two-2ljcc/'>Vec Tor Bel w/ John J. O&apos;Connor</a></p>
      <p><a href='https://www.johnjoconnor.net/ncp/project-two-2ljcc/'>Vec Tor Bel w/ Elias Jarzombek</a></p>
    </div>
  ),
  new TextPostData('Rec Lobe TV, 2022', 'installation',
    <div>
      <p><a href='https://www.johnjoconnor.net/ncp/rec-lobe-tv/'>Rec Lobe w/ John J. O&apos;Connor</a></p>
      <p><a href='https://eliasjarzombek.com/rec-lobe-tv/'>Rec Lobe w/ Elias Jarzombek</a></p>
    </div>
  ),
  new TextPostData('Other People, Press Releases', 'sound',
    <div>
      <p><a
        href='https://inlensk.bandcamp.com/album/obratno?label=9516530&tab=music'>https://inlensk.bandcamp.com/album/obratno?label=9516530&tab=music</a>
      </p>
      <p><a
        href='https://terepa.bandcamp.com/album/terepa?label=9516530&tab=music'>https://terepa.bandcamp.com/album/terepa?label=9516530&tab=music</a>
      </p>
      <p><a
        href='https://okokon.bandcamp.com/album/turkson-side?label=9516530&tab=music'>https://okokon.bandcamp.com/album/turkson-side?label=9516530&tab=music</a>
      </p>
      <p><a
        href='https://soundcloud.com/otherpeoplerecords/sets/dave-harrington-before-this'>https://soundcloud.com/otherpeoplerecords/sets/dave-harrington-before-this</a>
      </p>
      <p><a
        href='https://soundcloud.com/otherpeoplerecords/sets/ancient-astronaut-album'>https://soundcloud.com/otherpeoplerecords/sets/ancient-astronaut-album</a>
      </p>
    </div>),
  new TextPostData('Abstract Speed + Sound, Vaghe Stelle, 2017', 'sound',
    <div>
      <p>
        Other People is pleased to announce <a href='https://vaghestelle.bandcamp.com/album/abstract-speed-sound-2'>Abstract
        Speed + Sound</a>, a new seven-track recording by Turin’s Daniel Mana aka Vaghe Stelle. Previously associated
        with Italian label Gang of Ducks and a current member of production group One Circle with fellow nationals
        Lorenzo Senni and A:RA, Daniele’s roots in the emerging Italian production scene run deep and place him at its
        center. His is a clear, utterly contemporary voice with a unique relation and keen ear to the relevant past.
      </p>
      <p>
        Taking its title from painter Giacomo Balla’s iconic 1913-14 work, the EP draws a critical line between
        contemporary digital music practices and the century-old Italian Futurist movement. Where Futurism obsessed over
        the automobile and its unprecedented speed, Daniele fixates on the newer precedent set by digital networks, how
        they move our bodies and how our representations move through them. The cover art immediately speaks to this: a
        digital self-portrait of the artist stylized atemporally as a Nefertiti bust and/or The Man Who Fell to Earth.
      </p>
      <p>
        Following themes of self-making and reimagining, Daniel draws from a canon of definitive Italian films for his
        palette of fluttering, disembodied vocal samples. Highly processed, not exactly dehumanized, they’re evocative,
        yet impossible to trace—towing deep into the uncanny valley. Their haphazard arrangement and asexual timbre
        react to temper any masculine swagger boasted in the rhythm of these tracks. Rocky drums splash and batter like
        objects in viscous space, while shards of vocality replete the distortion. Follow the slipping downbeat of
        “Hyper” or the tragic syncopation of “Multiple Concentric Hexagons”.
      </p>
    </div>
  ),
  new TextPostData('Jream House, A Pleasure, 2016', 'sound',
    <div>
      <p>
        Following his Extended Play EP on Other People last year, <a
        href='https://open.spotify.com/album/2jQameThsdE5xRuueEL3yM?si=T0Df2mX2TqWHZjpEyqdlUg'>Jream House</a> is the
        turbulent and spiritual debut LP of Mark Hurst AKA A Pleasure.
      </p>
      <p>
        Blending mathematical composition with an unrestrained studio experimentalism, the sound of A Pleasure charts a
        space where formative influences confront the most immediate performative impulse. Using a process of numerical
        transposition, the names of personally significant bands and composers are converted into drum patterns. He then
        lets loose, improvising around these structures with a variety of traditional and unorthodox instruments: bass
        and guitar, bowed cymbals, drum machines juggled like turntables, blowtorch on aluminum, to name but a few. With
        his influences as start-points, he builds rhythmic structures literally in their namesake, blasting their hulls
        with walls of noise, monolithic basslines and any other jam-yielded shrapnel.
      </p>
      <p>
        Despite the chaos and complexity of the process, the results sound neither clinical, nor garbled. The tracks
        always find their way to an emotive melody or strong groove. Lush guitar strums and yearning keys ride the
        high-speed beat of “Slow Channel”, which seems to soar through cloud-cover as one snaking mass. “The Order of
        Things” folds a cosmic guitar-part into a backdrop of heavily side-chained noise. “Arthur Russell” features a
        neck-snapping rim-shot and crushed snare that splash up the bits of an elegiac vocal part. Through violent and
        idyllic atmospheres, Jream House jettisons its inspirations like landing shuttles, always in search of new
        ground. These are songs, not just experiments.
      </p>
    </div>
  ),
  new TextPostData('Disquiet, John Bence, 2015', 'sound',
    <div>
      <p>
        John Bence&apos;s <a href='https://johnbence.bandcamp.com/album/disquiet'>Disquiet</a> is a composition in three
        movements for soprano voice and cello, but what you hear is not that composition. After scoring and recording
        the full piece, Bence manipulated the recordings to produce something new. Then he wrote a new score,
        re-recorded, manipulated, and re-scored again ... and again. This Disquiet is a layering of many — the process
        is the result. It&apos;s a slow-churning, microtonal wash, at once liquid and brilliantly crystalline in effect.
      </p>
      <p>
        Two timbres fracture into many. Vocals flicker in and out of being, wrestling with silence. A tectonic drone
        slides below and aerates a chorus. Cacophony blends into order as dense, subtle harmonies appear. What Bence has
        written falls somewhere between an electronic production and a classical composition. Where these two forms
        intersect is where Disquiet occurs.
      </p>
    </div>
  ),
  new TextPostData('Swing, Solpara, 2015', 'sound',
    <div>
      <p>
        Other People is excited to announce Paul Sara’s debut EP as Solpara: <a
        href='https://solpara.bandcamp.com/album/swing-ep'>Swing</a>. Paul
        recently returned to his New York home after spending five years in Montreal studying,
        working, and composing. There, he co-founded Booma Collective with Oren Ratowsky
        and Valentin Stip, a local group of musicians and sound artists. Swing is a sort of
        summation of Paul’s time in Montreal, as well as his first full solo release outside of
        Booma.
      </p>
      <p>
        For Paul, Swing is movement, sound, and hypnosis. That fine, affective modulation, as
        present in a drum machine or a drummer’s hand, plays a role. But so too does Paul’s
        memory of winter sessions in Booma’s studio (ironically named “The Furnace”), where
        he and his friends had to swing their bodies back and forth to keep warm. The five tracks
        on Swing evoke warmth within cold, cavernous spaces.
      </p>
      <p>
        “Descent” begins the EP with a one synth panning and undulating quietly left and right
        before the drop of a gentle, knowing beat. Next, “Swing” bursts open with a tremendous
        kick looming over tumultuous layers of bass frequency filigreed by glowing chords. The
        gruff, calloused percussion of “Vitamin C” sounds like its rattling inside the case of a
        grenade. And “Short Circuit,” the longest track here and an awesome demonstration of
        polyrhythmic capacity, doubles as jagged sound sculpture.
      </p>
    </div>
  ),
  new TextPostData('The Free Fall Inspirations, 12z, 2015', 'sound',
    <div>
      <p>
        Next on Other People, Hungarian electroacoustic duo 12z (onetwozed) present an eclectic palette of intricate,
        improvisatory tone poems with <a href='https://12ztrio.bandcamp.com/album/the-free-fall-inspirations'>The Free
        Fall Inspirations</a>. This is the first of two upcoming full-lengths with the label and the second, Trembling
        Air, will follow in just a few months.
      </p>
      <p>
        As pure improvisors, Bálint Szabó and Márton Kristóf have constructed a substantial body of work, including film
        scores, studio recordings, and a significant archive of 12z Sessionz — weekly improvised jams with a shifting
        cast of collaborators. These Sessionz were compiled into a self-released podcast which followed their
        self-titled debut on Hungarian label Farbwechsel. All this is not even to mention their live work, which is at
        the foundation of 12z’s craft and artistry. With Bálint on guitar, Márton on electronics, and guest member Áron
        Porteleki often joining on drums, they fluctuate between jagged rhythmic passages, floating moments of harmonic
        tension, and any other form that emerges, always chiseling structure from the chaos.
      </p>
      <p>
        The Free Fall Inspirations marks a significant shift in 12z&apos;s work, being their first entirely electronic
        recording. The album was sparked by György Pálfi&apos;s film Free Fall, for which it was recorded as a potential
        score, but it stands strong independently, conjuring its own strange images. Tracks are short — structures
        built, scenes evoked, and then left — without repetition. &apos;All is Vanity&apos; creates a cool, distorted atmosphere
        with strobed, guitar-like twangs jumping octaves and a squeezed, modular bass stepping around odd scales.
        ‘Patience Is Not Just A Virtue’ evokes fear and melancholy with clattering metal, low-slung modulating keys, and
        a billowing foghorn. ‘Sixteen Petals of Blue Light’ rings like a duet between an organ and the glassed vibration
        of leaves falling on the surface of a lake. Each piece could be heard as part of some implied narrative, but The
        Free Fall Inspirations is not a puzzle — it’s a collection of experiments in music’s affect, where melody and
        rhythm are not the only tools.
      </p>
    </div>
  ),
  new TextPostData('Ashes 2 Ash, Ashlee, 2014', 'sound',
    <div>
      <p>
        Like a dream you don’t want to admit, Ashlee’s <a
        href='https://www.youtube.com/playlist?list=PL9rByFUQL1ARZAf7mzVKC05xU9cjhC6wM'>Ashes 2 Ash</a> is gut
        wrenching,
        punchy and frighteningly vague—a dark, minimal collage of canned sound, bleak,
        unaccommodating lyrics and almost-there grooves.
      </p>
      <p>
        Meet Ashlee, your mother, your sister, the girl next door. Don’t listen to what they told you about
        her. Among gym-whistles, clipped chimes and noisemakers, she sings of an agitated encounter
        with a dog. In lazy autotune she tells you why you ought to sober up. She thinks you’re her
        Brother.
      </p>
      <p>
        For every bit of the EP’s DIY irreverence there is complexity and richness in turn—of vocal
        phrasing, of rhythm, of language. Ashlee’s voice is so nice, but nothing she says is easy.
        Snatches of coherent melody bloom before an awkwardly delivered lyric or odd synth butts in.
        And all the while some kinda funk hangs in the back.
      </p>
    </div>
  ),
  new TextPostData('Tiny Mix Tapes', 'sound',
    <div>
      <p><a
        href='https://www.tinymixtapes.com/news/david-lynchs-festival-disruption-returns-justin-vernon-tv-radio-sheryl-lee-and-more'>https://www.tinymixtapes.com/news/david-lynchs-festival-disruption-returns-justin-vernon-tv-radio-sheryl-lee-and-more</a>
      </p>
      <p><a
        href='https://www.tinymixtapes.com/news/elysia-crampton-releases-new-album-spots-y-escupitajo'>https://www.tinymixtapes.com/news/elysia-crampton-releases-new-album-spots-y-escupitajo</a>
      </p>
      <p><a href='https://www.tinymixtapes.com/news/tim-and-eric-go-awesome-and-great-tour-summer'>https://www.tinymixtapes.com/news/tim-and-eric-go-awesome-and-great-tour-summer
      </a></p>
      <p><a href='https://www.tinymixtapes.com/news/mistake-lake-founder-andrew-kirschner-seeking-medical-donation'>https://www.tinymixtapes.com/news/mistake-lake-founder-andrew-kirschner-seeking-medical-donation
      </a></p>
      <p><a href='https://www.tinymixtapes.com/news/william-s-burroughss-rare-tape-experiments-released-vinyl'>https://www.tinymixtapes.com/news/william-s-burroughss-rare-tape-experiments-released-vinyl
      </a></p>
      <p><a href='https://www.tinymixtapes.com/news/n-prolenta-announces-ep-purple-tape-pedigree-shares-query-prayer'>https://www.tinymixtapes.com/news/n-prolenta-announces-ep-purple-tape-pedigree-shares-query-prayer
      </a></p>
      <p><a
        href='https://www.tinymixtapes.com/news/soundcloud-finally-allows-users-upload-music-albums-site-reportedly-sale'>https://www.tinymixtapes.com/news/soundcloud-finally-allows-users-upload-music-albums-site-reportedly-sale</a>
      </p>
      <p><a href='https://www.tinymixtapes.com/news/squarepusher-necks-and-james-mcvinnie-praise-organ-limited-uk-tour'>https://www.tinymixtapes.com/news/squarepusher-necks-and-james-mcvinnie-praise-organ-limited-uk-tour
      </a></p>
      <p><a
        href='https://www.tinymixtapes.com/news/anthony-child-surgeon-imagines-extra-galactic-pop-farthest-known-objects'>https://www.tinymixtapes.com/news/anthony-child-surgeon-imagines-extra-galactic-pop-farthest-known-objects</a>
      </p>
      <p><a
        href='https://www.tinymixtapes.com/news/sample-collagist-larry-gus-announces-second-album-i-need-new-eyes-dfa'>https://www.tinymixtapes.com/news/sample-collagist-larry-gus-announces-second-album-i-need-new-eyes-dfa</a>
      </p>
    </div>
  ),
  new TextPostData('Tear of the Cloud, 2018', 'sound, visual',
    <div>
      <p>
        <a
          href='https://tonyoursler.com/tear-of-the-cloud-new-york'>https://tonyoursler.com/tear-of-the-cloud-new-york</a>
      </p>
      <p>Editing, animation, color, sound editing & mixing, production assistance</p>
      <p><i>
        &quot;<a href='https://www.publicartfund.org/exhibitions/view/tony-oursler-tear-of-the-cloud'>Tear of the
        Cloud</a> is [Oursler’s] newest and most extensive site-specific multimedia artwork, with five digital
        projections superimposed onto the landmarked 69th Street Transfer Bridge Gantry, the surrounding landscape, and
        the flowing water of the Hudson River itself. These spectral images combine with an evocative soundscape to
        create a dramatic experience that transforms Riverside Park each night.&quot;</i> - Public Art Fund
      </p>
    </div>
  ),
  new TextPostData('Water Memory, 2019', 'sound, visual',
    <div>
      <p>Editing, animation, color, sound editing & mixing, production assistance</p>
      <p>
        <a href='https://www.guildhall.org/events/tony-oursler/'>https://www.guildhall.org/events/tony-oursler</a>
      </p>
      <p>
        <a
          href='https://tonyoursler.com/water-memory-east-hampton'>https://tonyoursler.com/water-memory-east-hampton</a>
      </p>
    </div>
  ),
  new TextPostData('6th, 2019', 'sound, visual',
    <div>
      <p>Editing, animation, color, sound editing & mixing, production assistance</p>
      <p><a href='https://tonyoursler.com/6th-hobart'>https://tonyoursler.com/6th-hobart</a></p>
      <p><i>&quot;For Dark MOFO Oursler has produced a site specific sound and light intervention in the Beaumaris Zoo. The
        artist takes a darkly humorous approach to the erosion of critical thought, rise of fake news, conspiracy
        theories, superstitions, and all forms of magical thinking while asking the question: Is truth on the verge of
        extinction? The cage which was the home of the last living Thylacine, or Tasmanian Tiger, becomes the site of a
        digital de-extinction of the legendary beast via sweeping projections, music and light.&quot;</i> - Dark MOFO</p>

    </div>
  ),
  new TextPostData('Eclipse, 2019', 'sound, visual',
    <div>

    </div>
  ),
  new TextPostData('Current, 2019', 'sound, visual',
    <div>
      <p>Editing, animation, color, sound editing & mixing, production assistance</p>
      <p><a href='https://tonyoursler.com/current-nanjing'>https://tonyoursler.com/current-nanjing</a></p>
    </div>
  ),
  new VideoPostData('No Transformation, 2020', 'https://www.youtube.com/embed/f_OlK62XoI0', 'Editing, animation, color'),
  new TextPostData('State_Nonstate (Hypnose), 2020', 'sound, visual',
    <div>
      <p><PlainLink href='https://tonyoursler.com/state_nonstate-hypnose'/></p>
      <p><PlainLink
        href='https://museedartsdenantes.nantesmetropole.fr/en/home/informations-actus/expositions/archives-expositions/hypnose/visite-virtuelle-tony-oursler.html'/>
      </p>
      <p><PlainLink
        href='https://museedartsdenantes.nantesmetropole.fr/en/home/informations-actus/expositions/archives-expositions/hypnose.html'/>
      </p>
      <p>
        <i>&quot;Video sketches, close to the spirit of early cinema, animate a decor populated with multiple objects,
          sculptures and screens … Tony Oursler mixes multiple visual references to the history of hypnotism and various
          contemporary anxieties linked to digital technologies.
          The installation consists of a dozen works in which sculpture and video art interact. For example, Franz
          Mesmer and his caricature, a donkey hypnotizing a patient, Magnetic Tree, a four-metre high tree that alludes
          to the tree that Puységur had magnetized and to which patients were connected by ordinances to heal, as well
          as a piece referring to the beat generation and Brion Gyson&apos;s Dreammachine, producing a disturbing visual
          phenomenon that induces relaxation, in a similar way to a hypnosis session.&quot;</i> - Musée d’arts de Nantes
      </p>
    </div>
  ),
  new TextPostData('Black Box, 2021', 'sound, visual',
    <div>
      <p>Editing, animation, color, sound editing & mixing, production assistance</p>
      <p><PlainLink href='https://tonyoursler.com/black-box'/></p>
      <p><PlainLink href='https://tonyoursler.kmfa.gov.tw/'/></p>
      <p><i>&quot;Black Box is the first full-scale retrospective of Tony Oursler in Asia, this momentous exhibition will
        showcase his most definitive video installations, experimental films, and cinema work over nearly four
        decades.&quot;</i> - Kaohsiung Museum of Fine Arts</p>
    </div>
  ),
  new TextPostData('Anomalous, 2022', 'sound, visual',
    <div>
      <p>Editing, animation, color, production assistance</p>
      <p><PlainLink href='https://tonyoursler.com/anomalous'/></p>
      <p><PlainLink href='https://elysee.ch/en/2022/06/tony-oursler-anomalous/'/></p>
      <p><i>&quot;For the inauguration of its new building, Photo Elysée gives carte blanche to Tony Oursler. On this
        occasion the American artist presents three video installations in the LabElysée space. By exhibiting a
        particular theme, the testimonies of encounters with unidentified flying objects (UFOs), Oursler questions our
        relationship to images and their influence in a world where screens are becoming increasingly widespread.
        Consisting of photographs, documents and videos depicting UFOs, the installations explore the visual constructs
        of ufology. They invite visitors to take a position on what they see and question the status of the information
        presented to them.&quot;</i> - Photo Elysee</p>
    </div>
  ),
  new TextPostData('Crossing Neptune, 2022', 'sound, visual',
    <div>
      <p>Editing, animation, color, sound editing & mixing, production assistance</p>
      <p><PlainLink href='https://www.fotofocus.org/fotofocus-exhibition/tony-oursler-crossing-neptune'/></p>
      <p><PlainLink href='https://tonyoursler.com/crossing-neptune'/></p>
      <p><i>&quot;Crossing Neptune is an exhibition featuring archival works on the theme of water from the personal
        collection of artist Tony Oursler—photographs, mostly anonymous, of baptisms, “blob monsters,” ice formations,
        and actual vessels of holy water—plus original installation works by Oursler on water as a transformative
        element embodying a long list of inherited, paranormal mythologies.&quot;</i> - Fotofocus</p>
    </div>
  ),
  new TextPostData('mAcHiNe E.L.F., 2023', 'sound, visual',
    <div>
      <p>Editing, animation, color, sound editing & mixing, graphic design, production assistance</p>
      <PlainLink href='https://tonyoursler.com/machine-elf'/>
      <PlainLink href='https://www.lehmannmaupin.com/exhibitions/tony-oursler-7'/>
      <p><i>&quot;For his latest exhibition the artist has created a series of “electrified” silhouettes that feature painted
        and printed collages interspersed with embedded digital displays, as well as an immersive, large-scale
        installation of optical crystal structures that act as reflecting screens for a kaleidoscopic digital projection
        of otherworldly performers and hand drawn and AI-generated animations.&quot;</i> - Lehmann Maupin</p>
    </div>
  ),
  new VideoPostData('Jack Colton Editing Reel, 2021', 'https://player.vimeo.com/video/587666876', ''),
];

const Posts = PostItems.map((post, i) => {
  if (post instanceof TextPostData) {
    post = post as TextPostData;
    return <TextPost title={post.title} body={post.body} tag={post.tag} key={i}/>;
  } else {
    post = post as VideoPostData;
    return <VideoPost title={post.title} url={post.url} description={post.description} frameClass={post.frameClass}
                      tag={post.tag}
                      key={i}/>
  }
});

export default Posts;
