import { BentoGrid ,BentoGridItem} from './ui/BentoGrid'
import { gridItems } from '@/Data'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid>
            {gridItems.map(({title,description,id,className,img,imgClassName,titleClassName,spareImg })=>(
                <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img = {img}
                imgClassName = {imgClassName}
                titleClassName = {titleClassName}
                spareImg ={spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid