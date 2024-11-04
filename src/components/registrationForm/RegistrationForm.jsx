import { useState } from 'react'
// import RegistrationTemplate from '../regitionTemplate/RegistrationTemplate'
import { submitFun } from '../../redux/createSlice/createSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const RegistrationForm = () => {
    let [input,setInput]=useState({fname:'',lname:'',email:'',mobile:'',gender:'',city:'',country:'',summery:'',dob:'',zipcode:'',skill:[],projects:[],education:[]})
    // let [submit,setSubmit]=useState(false)
    let navigate=useNavigate()
    let [key,setKey]=useState('')
    let [projectdata,setProjectdata]=useState('')
    let [educ,setEduc]=useState(false)
    const [educationForm, setEducationForm] = useState({
      topic: '',
      clg_name: '',
      clg_loc: '',
      pass_year: '',
      perc: ''
    });
   let dispatch=useDispatch()

    const handleInput=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }
 
  const addskill = () => {
    if (key.trim()) {
      setInput((prev) => ({ ...prev, skill: [...prev.skill, key] }));
      setKey('');
    }
  };
  const addProject = () => {
    if (projectdata.trim()) {
      setInput((prev) => ({ ...prev, projects: [...prev.projects, projectdata] }));
      setProjectdata('');
    }
  };
  const handleEduc = (e) => {
    const { name, value } = e.target;
    setEducationForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const educationfun = () => {
    setInput(prev => ({
      ...prev,
      education: [...prev.education, educationForm] // Add form data to education array
    }));
  
    // Clear the education form fields
    setEducationForm({
      topic: '',
      clg_name: '',
      clg_loc: '',
      pass_year: '',
      perc: ''
    });
  };

  const submitbtn = () => {
    console.log(input, 'hello');
    dispatch(submitFun(input));
    navigate('/registrationtemplate');
  };

  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col border border-2 border-info my-2 bg-black overflow-y-scroll"style={{height:'490px'}} >
                <h5 className='fw-bold text-center py-2 text-info  '>RESUME CREATOR-FORM</h5>

                <div className="form mt-4">
                  <div className="div d-flex ">
                  <div className="div">
                  <h5 className='text-info'>firstname</h5>
                  <input onChange={handleInput} type="text" placeholder='enter first name' name='fname'/>
                  </div>
                   <div className="div">
                   <h5 className='text-info'>lastname</h5>
                   <input onChange={handleInput} type="text" placeholder='enter last name' name='lname' />
                   </div>
                  </div>
                 <br />
                   <div className="div d-flex">
                  <div className="div">
                  <h5 className='text-info'>email-id</h5>
                  <input onChange={handleInput} type="email" placeholder='enter emaill id ' name='email' />
                  </div>
                    <div className="div">
                    <h5 className='text-info'>mobile</h5>
                    <input onChange={handleInput} type="number" placeholder='enter mobile no'name='mobile' />
                    </div>
                   </div>
                  <br />
                    <h5 className='text-info'>gender</h5>
                    <div className='text-white'>male <input type="radio"className='me-2' name='gender' value='male' onChange={handleInput}  />
                    female <input type="radio" name='gender' value='female'onChange={handleInput}/><br /><br />
                    </div>
                    <h5 className='text-info mb-2'>Date-of-birth</h5>
                    <input type="date"name='dob' className='bg-info text-dark py-1 w-50  px-2 border-0'onChange={handleInput} />
                    
                  <div className="select-div d-flex gap-3 ">
                  <div className="country">
                   <h5 className='text-info'>country</h5>
                    <select className='px-2 py-1 bg-white text-dark' 
                     name='country' 
                     onChange={handleInput}
                    
                    >
                         <option value="">select</option>
                        <option value="india">india</option>
                        <option value="america">america</option>
                        <option value="euorop">euorop</option>
                    </select>
                   </div>
                    <div className="city">
                    <h5 className='text-info ms-1'>city</h5>
                    <select className='px-2 py-1 bg-white text-black'
                     name='city' 
                     onChange={handleInput}
                   
                    >
                       <option value="">select</option>
                        <option value="puri">puri</option>
                        <option value="hyderabad">hyderabad</option>
                        <option value="mumbai">mumbai</option>
                    </select>
                    </div>
                  </div>
                  <div className="zip-code">
                    <h5 className='text-info'>Zip-code</h5>
                    <input type="number" name='zipcode'  onChange={handleInput} placeholder='zip-code' />
                  </div>
                  <div className="mt-3">
                    <h5 className='text-info'>summary</h5>
                  <textarea name="summery" id=""  onChange={handleInput} className=' w-100  bg-white text-dark'placeholder='type here...' style={{height:'100px'}}></textarea>
                  </div>
                  <div className="key-skill text-info ">
                    <h5 >key-skill</h5>
                    <input type="text" placeholder='enter skills' 
                     onChange={(e)=>setKey(e.target.value)} value={key} className='w-50'
                    //  name='skill' 
                    />
                    <button className='btn btn-outline-info' onClick={addskill}>Add</button>
                    <p className='mt-2 text-info'>
                    {input.skill.join('-')} 

                    </p>
                  </div>

                  <div className="projects text-info ">
                    <h5 >my-projects</h5>
                    <textarea type="text" placeholder='enter projects details' 
                     onChange={(e)=>setProjectdata(e.target.value)} value={projectdata} className='w-50 bg-white text-dark'style={{height:'100px'}}></textarea><br />
                
              
                    <button className='btn btn-outline-info' onClick={addProject}>Add</button>
                  <ul>
                  <li className='mt-2 text-info'> {input.projects.length} project added</li>
                  </ul>
                  </div>
                  <h5 className='fw-bold text-info'>Education</h5>
                   {
                    educ ? 
                    <div className="eduaction text-info">
                      <input type="text" name='topic' value={educationForm.topic}
                       placeholder='enter your degree'onChange={handleEduc} />
                      <input type="text" name='clg_name' value={educationForm.clg_name} placeholder='enter clg name'onChange={handleEduc} /><br />
                      <input type="date" name='pass_year' value={educationForm.pass_year} placeholder='enter pass year'onChange={handleEduc} />
                      <input type="text" name='clg_loc' value={educationForm.clg_loc} placeholder='enter location'onChange={handleEduc} /><br />
                      <input type="number" name='perc' value={educationForm.perc} placeholder='enter percentage'onChange={handleEduc} />
                      <button className='border' onClick={educationfun}>add</button>
                      <ul>
                         {input.education.map((edu, index) => (
                           <li key={index}>
                             {edu.topic}, {edu.clg_name}, {edu.clg_loc}, {edu.pass_year}, {edu.perc}
                           </li>
                         ))}
                       </ul>
                  </div>: 
                  <button onClick={()=>setEduc(true)} className='w-50 border hover:bg-warning'>Add education details</button>
                   }
                  
                  <div className="submitbtn text-center my-5">
                    <button className='btn btn-info' onClick={submitbtn}>submit</button>  

                    
                    </div>
                   

                </div>

            </div>
           
              {/* {submit &&   <RegistrationTemplate inputresult={input}/>} */}
         
        </div>
        <p className='text-info'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores illum saepe molestias harum excepturi voluptates molestiae quisquam aspernatur blanditiis consequuntur sed, dicta rem dolorem praesentium quas dignissimos voluptatibus rerum quasi velit veniam cum minima! Harum inventore odio porro a tempore? Repudiandae amet minus maiores iste, fuga, harum esse quo quos consectetur incidunt obcaecati quibusdam ratione sit cum dicta possimus quisquam suscipit? Consectetur assumenda expedita cupiditate pariatur blanditiis, suscipit perspiciatis placeat explicabo eveniet animi doloremque minima omnis excepturi sunt dignissimos temporibus! Hic commodi necessitatibus enim natus maiores dicta, amet expedita quaerat, ab optio facilis doloremque? Perferendis expedita odio aliquid quia, laborum quod a? Voluptatum necessitatibus dolores, sit quas architecto officia debitis quos. Accusantium repellendus debitis eveniet ducimus illum, officia, non et autem aperiam perspiciatis recusandae veniam nostrum. Corporis rem, corrupti est maxime tenetur molestiae odio aut repellat mollitia beatae voluptatem voluptates at quos deleniti necessitatibus reiciendis, consequatur aspernatur porro unde tempore. Sunt numquam molestias repellendus earum praesentium saepe eaque aut alias, asperiores ipsum ex distinctio iste dolore quae excepturi consequuntur dolor maxime expedita libero tenetur doloremque aperiam consequatur illo. Illo dignissimos nobis veritatis deleniti vitae qui iusto veniam. Illum, voluptatibus temporibus. Beatae odio distinctio optio quis itaque excepturi incidunt iure dolore ipsam fugit molestiae tempora minima aspernatur, consectetur, facilis quisquam hic. Saepe quo a necessitatibus cumque, esse rerum corporis nam doloremque non veniam ullam blanditiis quaerat velit recusandae, eveniet aliquid? Dolorem, ad! Perspiciatis, fuga ad? Ea autem dolor voluptates. Corrupti incidunt vero nesciunt harum, sequi fugiat laboriosam laborum dolorem? Soluta beatae, reiciendis corrupti sapiente iste cupiditate nobis assumenda consectetur placeat tempore debitis voluptatum quas unde totam obcaecati consequuntur quibusdam amet dolore, eos quos impedit nisi! Ipsam cum rerum, quae laboriosam illo vitae, distinctio cupiditate quis consequuntur consectetur assumenda, quaerat nihil aperiam! Illum, totam aspernatur. Quaerat minima enim nulla iure laborum dolore quia, itaque facere, eos a perspiciatis nam voluptate veritatis ipsum? Illo commodi explicabo quibusdam ipsum ut ab maxime excepturi aut tempore. Consequatur inventore nostrum cum, accusamus magni repellat hic non vero natus, mollitia dolor fugit beatae aliquam accusantium. Repellendus voluptas architecto tempora libero nisi, recusandae omnis dicta optio animi praesentium voluptatum voluptate, delectus amet rerum temporibus sequi, nostrum nulla. Sunt odio quia sed, perspiciatis maiores minima labore, error enim ipsam modi facilis tempore. Nesciunt, officiis sapiente libero modi officia eaque a. Animi magni, reiciendis adipisci totam quo officiis quia, vero minima quaerat molestias sunt! Unde dicta culpa corporis expedita et itaque provident voluptates est enim? Dicta ipsam iste nihil cumque voluptate quidem aperiam molestias. Voluptatibus molestias libero rem totam hic quam, sit recusandae tenetur necessitatibus aut excepturi ullam magnam ut. Facere officiis esse deserunt provident quas. Omnis quas odit, sunt qui dolor ea ipsa quam totam ducimus officiis veniam atque, corporis temporibus. Illo voluptatum molestias animi esse amet. Commodi, eos maxime. Eligendi nihil facere provident quo non iure illo, necessitatibus quibusdam cumque accusantium similique fuga libero earum nisi recusandae, error pariatur modi culpa soluta velit sit enim dolorem maxime! Laboriosam non placeat, doloremque eos fuga, dicta neque ducimus sed libero minus eaque necessitatibus illo fugit cum debitis! Libero voluptatibus veritatis quae officia neque odit atque culpa itaque pariatur magnam veniam laudantium est numquam, asperiores provident et, deserunt eius esse. Optio esse aliquam rerum, ex veniam voluptatem corrupti neque ipsam eveniet non mollitia! Porro magnam vitae tenetur omnis, odit accusamus eum voluptates veritatis autem dolorum praesentium, cumque, laboriosam quia architecto quas ad! Saepe omnis officiis rem, minus fugiat exercitationem rerum, odio doloremque nihil laudantium dicta incidunt quisquam, dolor id unde iure molestias sed. Rerum incidunt quae, beatae ex, a ratione nisi sequi optio ad tenetur, nulla libero ab minus? Ex itaque a eum dignissimos saepe earum hic quas sequi ipsam incidunt perspiciatis excepturi aliquam molestias architecto cumque minus, recusandae neque nobis quia non, voluptate nostrum? Sed repudiandae enim cupiditate natus illo aut commodi minus modi officiis officia! Possimus soluta totam excepturi cupiditate quis, nobis, nesciunt odio quos nam delectus laborum omnis distinctio hic porro adipisci eius sequi dicta corrupti enim fugit illum dolore modi laudantium? Quo porro accusantium placeat rerum autem, vitae vero quibusdam dignissimos doloremque corrupti eum delectus nostrum. Iure maiores veritatis quam doloremque ducimus, voluptatem officiis sit, accusantium magni ipsam perferendis, consequatur excepturi corporis in. Expedita incidunt dolorum aliquam ex cumque id aut dignissimos porro distinctio. Nesciunt officiis hic debitis voluptatibus, repellat natus, illum temporibus asperiores dignissimos saepe modi! Ab distinctio voluptate voluptas ut quos id, non laborum dolorum velit commodi ipsam explicabo, accusantium nihil consequatur. Quas numquam aliquam commodi ut quis sapiente repudiandae, earum nisi ad vitae sed dolor, odit voluptas. Fugit repellat animi necessitatibus facilis iste quam, officia et? Vel maxime ea perferendis culpa dolores alias eius quod, ut reprehenderit beatae earum aliquam id fuga ipsa, dolorem quis? Veritatis, unde magni vitae praesentium ut ex vero. Non doloremque dicta repellendus eaque, excepturi cum, temporibus molestias illum ad rem facilis beatae officiis repudiandae? Minus, temporibus? Laboriosam quam, ut explicabo odio voluptates reprehenderit, impedit autem cupiditate possimus tenetur rem voluptas molestias accusamus voluptatem necessitatibus at optio alias blanditiis tempora nam ipsam! Quasi voluptates modi cumque expedita beatae architecto eum sit quas nam at dolores ea, deserunt ut odit dolor? Possimus sapiente praesentium quo cumque maiores at et ab vero dolore provident aperiam libero natus quam alias ipsam ratione numquam doloremque quidem debitis, odio ea. Rerum eum vero saepe totam qui laudantium quam ipsam id mollitia, facilis nisi, quisquam reiciendis expedita repudiandae dolore commodi quidem cupiditate consequuntur repellendus officia tempora eos ut nulla? Sapiente commodi eaque nemo eos doloribus non reprehenderit? Reprehenderit perspiciatis alias est tempore quidem impedit fugit doloremque minus dignissimos quam id eaque rem dolor quos, veniam expedita laudantium. Impedit, quam. Possimus exercitationem atque impedit laboriosam nihil nostrum at a, dolorum ea natus ratione commodi esse excepturi ducimus eaque soluta velit molestias sint ipsam quo sequi accusantium illum. Sint fugit quos tempore deleniti earum, magni in odit autem veritatis nulla eius quisquam et quibusdam! Mollitia aut incidunt tempora eveniet assumenda ea totam voluptate labore suscipit dolores excepturi exercitationem quidem accusantium harum, perspiciatis cumque cupiditate atque odit ipsam. Maiores soluta ullam quo neque impedit dolore, sapiente voluptatum, ut sequi cumque amet voluptas id dolor quis fugit asperiores atque earum et, quas illum quod in. Officiis odio fugit eos, facilis quisquam sequi, non quia, quasi ullam excepturi quo iure earum ad dolor laborum. Numquam asperiores culpa praesentium quasi. Expedita, quae ducimus id molestiae architecto mollitia optio earum laudantium velit, reprehenderit voluptates tenetur laboriosam nesciunt sunt atque culpa voluptas quia consectetur aut voluptatem beatae corrupti. Amet blanditiis quae minus tenetur sequi, inventore debitis quis suscipit dignissimos beatae et corporis aliquam alias enim voluptate repudiandae dicta? Animi necessitatibus nisi fugiat? Quis sapiente mollitia praesentium enim facilis distinctio eum delectus libero vel sint adipisci, dolore labore inventore aliquam ipsum reprehenderit sed deleniti. Ea suscipit voluptatibus minus laudantium aliquam asperiores eos quibusdam deserunt temporibus nobis quisquam inventore ab officia velit eveniet vel, nisi ut magni esse eum recusandae fuga? Pariatur ad dignissimos amet, ipsa impedit veritatis odit optio quod culpa incidunt consequatur dolore repellat quam. Consequuntur ipsam officiis dolorem fugit nostrum consectetur in facilis voluptatibus amet exercitationem repudiandae quasi, animi tempore architecto porro. Ullam sapiente ipsum ea rerum fugiat suscipit illo omnis culpa fugit hic necessitatibus nisi laboriosam atque voluptatibus expedita quibusdam, eaque magni quidem. Quaerat nulla quod sed ducimus illum eligendi fugiat enim modi saepe laboriosam est, quibusdam dolorem, recusandae neque, non suscipit consequuntur ullam omnis. Aliquam nostrum quas nobis quae nemo possimus, accusamus adipisci. Voluptates ipsa dolor non quaerat deleniti provident, quis culpa dolores ea laboriosam beatae ipsam in quam! Voluptatibus enim dolor, esse, atque vel nisi facere, corporis nam laborum totam tenetur nulla fuga rerum. Ex, autem delectus ad aperiam illum vitae quae mollitia tempora natus ratione hic ipsum! Amet, aperiam. Ipsa fugiat quidem libero! Eligendi, voluptate deserunt? Dolore pariatur, eaque quos numquam omnis ab officia, soluta quo doloribus vero voluptate temporibus distinctio nam repellendus id nihil tempore eveniet! Rerum, ab cum sapiente tempora fuga minima voluptatibus nulla minus ratione error eligendi quaerat adipisci odit pariatur a consequuntur reprehenderit veritatis ad magnam nam exercitationem? Temporibus nulla eius commodi minima dolorum suscipit quos voluptatum fuga reprehenderit nam magnam delectus corporis eaque tempora vitae eveniet sint dignissimos ipsum vel alias, labore autem! Blanditiis reiciendis excepturi qui ipsam, magnam natus aut neque voluptatem vitae consequuntur quas dolorum a eligendi alias minima et? Repellendus recusandae, alias deserunt aliquid provident odio excepturi officiis corrupti vel, hic laudantium et tempora quasi ad? Aperiam praesentium ad obcaecati eum dolorum dignissimos illum labore! Modi expedita quo aperiam sed vero commodi error sapiente maiores corrupti corporis ipsum optio eveniet dolorem, voluptatibus ad? Error vero delectus dolorem atque commodi quia labore dolores voluptatibus aliquid eveniet provident, inventore praesentium molestias velit facilis quod libero esse temporibus! Vel adipisci eaque, sed quae facere voluptatum. Odio veritatis voluptates accusamus? Beatae quidem adipisci dolorum doloribus corrupti nam atque ducimus minus quis reiciendis impedit aliquam tempore sed rerum consequatur repellat laudantium iure neque et tenetur, perspiciatis exercitationem vitae animi! Enim adipisci laborum dolorum, ea quae odit facere quia quos sunt voluptatibus? Quam ipsum sed dolorem quaerat incidunt minima culpa aliquam officiis magnam autem quia ea mollitia quasi voluptatibus possimus, fugiat velit blanditiis. Inventore reiciendis odio placeat porro voluptates. Sed cumque fuga itaque labore repellat perspiciatis velit, esse perferendis incidunt, iusto eligendi ducimus maiores. Deleniti tenetur in debitis, voluptatem ducimus quae saepe nostrum adipisci consequatur harum autem doloremque animi dolorem iusto? Cupiditate reiciendis quo sed sunt dolore repellendus, culpa corrupti optio eaque veniam beatae molestias deserunt porro reprehenderit fugit, ea laborum! Quam recusandae eum consequuntur quaerat porro maxime, odio dolorum iusto culpa? Quis, dicta tempore accusamus earum optio veniam. Sint, pariatur tempore consectetur provident corrupti, asperiores soluta quis totam laborum earum voluptates praesentium cumque iste quibusdam cum harum quaerat dolorum similique vitae doloribus necessitatibus suscipit corporis. Tempore molestias id nulla, saepe dignissimos aperiam eveniet perferendis atque est vitae officia non, ducimus ut consequuntur distinctio reiciendis necessitatibus eligendi, laboriosam et! Optio numquam consequuntur eum temporibus nesciunt magni exercitationem sint rerum, quidem dolor minima voluptatibus tempore adipisci incidunt. Impedit exercitationem cum perspiciatis quo quod culpa assumenda, soluta eaque vel incidunt harum illum voluptatibus expedita voluptates nemo reprehenderit quibusdam perferendis aspernatur architecto in quasi adipisci. Neque molestiae adipisci exercitationem vel incidunt soluta doloremque unde sint illo? Consectetur minima, voluptatem, aut alias magni sint deleniti error voluptatum esse necessitatibus repellendus debitis nam recusandae odit eos temporibus. Vel maxime, fugiat iusto eveniet beatae quam sed asperiores minima quaerat ab, voluptatibus possimus in harum iste. Maxime, facere facilis iusto laudantium optio nobis ab iste officia, dolorum eius corrupti ipsam nihil harum recusandae earum debitis asperiores pariatur nostrum nulla itaque deleniti? Alias, dolore aliquid autem ullam ad ratione sit, sed et itaque corrupti expedita recusandae, tenetur aperiam ea blanditiis! Quibusdam ex incidunt itaque corrupti consequuntur adipisci sint enim distinctio a, quidem, sapiente fugiat! Nobis debitis dolore, alias esse corporis quas facilis odio accusantium amet rem cupiditate voluptatum eligendi placeat quibusdam totam quia consectetur officiis aperiam hic incidunt, quis laudantium! Sunt voluptate, nisi tempore deserunt corrupti totam dignissimos, libero autem ipsa aspernatur praesentium recusandae assumenda quos fugiat reprehenderit iure ratione illum eveniet vero ad rerum sequi! Dolorum voluptates labore, illo, similique cupiditate praesentium quisquam omnis eos suscipit molestias consequatur necessitatibus enim quas. Provident tempore incidunt molestias eveniet. Ipsam consequuntur iste delectus tenetur beatae deleniti quos vitae nisi ab soluta natus molestiae expedita, cupiditate aperiam iusto eos aut officia magnam libero, officiis cum aliquam. Nulla, dolore asperiores consequatur quia officia quos cumque similique eius tenetur, impedit porro ullam consectetur unde iste repellendus ipsam. Ut dolore consectetur inventore illum suscipit saepe quia, culpa necessitatibus dignissimos quasi autem optio minima nobis reprehenderit sapiente beatae corrupti provident. Suscipit aut nemo corporis aspernatur consequuntur adipisci voluptas vitae fugit laboriosam quo officiis, nulla doloribus iure consequatur soluta temporibus sapiente modi ipsam dolorem, sit maiores. Illum, sit ut corrupti recusandae quos repellat officiis impedit at optio possimus deleniti, eum distinctio consequuntur minus doloremque odio! Nesciunt tenetur error a eum quaerat eligendi architecto officiis enim numquam necessitatibus qui, ipsa facere facilis alias nulla eaque omnis! Eligendi vero alias illo neque, dolorum sequi fuga.</p>
      </div>
    </div>
  )
}

export default RegistrationForm
