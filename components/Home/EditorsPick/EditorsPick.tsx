import style from './EditorsPick.module.css'

const editorsPick = [
  {
    title: 'Journey To Glory',
    description: 'Read Chapter Four now...',
    category: 'F1'
  },
]

const EditorsPick = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.media}>
          <div className={style.previewMedia}>
            <div className={style.featuredImg}>
              <div className={style.imgView}>
                <div className={style.imgContainer}>
                  <img src="https://res.cloudinary.com/tommello/image/upload/v1672645137/Projeto%20Red%20Bull%20Racing/three-two-one_wzyyx6.avif" className={style.img} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.title}>
          {editorsPick.map((data, id) => (
            <div key={id} className={style.titleContent}>
              <a href="#" className={style.titleWrapper}>
                <h2>{data.title}</h2>
              </a>
              <div className={style.descriptionContent}>
                <span className={style.description}>
                  {data.description}
                </span>
              </div>
              <div className={style.furtherInfoWrapper}>
                <div className={style.furtherInfoContent}>
                  <a href="" className={`button ${style.buttonItem}`}>
                    <span className={style.buttonLabel}>More Info</span>
                  </a>
                </div>
                <div className={style.categoryContainer}>
                  <span className={style.category}>
                    {data.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EditorsPick