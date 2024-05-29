import '../styles/Technology.css'
import svgHtml from '../assets/svgs/html.svg'
import svgCss from '../assets/svgs/css.svg'
import svgAngular from '../assets/svgs/angular.svg'
import svgNode from '../assets/svgs/node.svg'
import svgSass from '../assets/svgs/sass.svg'
import svgPython from '../assets/svgs/python.svg'

export default function Technology() {
    const techs = [svgHtml, svgCss, svgSass, svgNode, svgAngular, svgPython];

    return(
        <section className="tech" id="technology">
            <div className="tech-container">
                <div className="tech-main">
                    <h2 className="tech-title">We use cutting edge technology</h2>
                    <p className='tech-subtitle'>Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                </div>
                <div className="tech-svgs">
                    {techs.map((img, index) => {
                        return <img src={img} alt={`tech-${index}`} key={index} />
                    })}
                </div>
            </div>
        </section>
    )
}