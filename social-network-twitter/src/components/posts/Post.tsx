import { faComment, faDownload, faHeart, faRetweet, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import UserImage from '../../assets/userImage.png';
import { Icon } from '../NavIcon/Icon';


export const Post = () => {
  	return (
		<section className="h-46 border-b border-b-white flex flex-row p-3 pt-2">
			<img src={ UserImage } className="w-12 h-14 m-2 mr-3" />

			<div>
				<span className='text-white'>maxi</span>
				<span className='text-gray-500 pl-0.5'>@pachelife</span>
				
				<p className='pb-2 text-white'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aut autem minus corporis officia tempora officiis magnam. Itaque libero iusto inventore blanditiis, explicabo in voluptas minus similique pariatur consequuntur iste.
				</p>

				<div className='w-3/4 flex justify-between mt-2 mb-2'>
					<Icon name={ faHeart }    size="lg" className='text-slate-700' />
					<Icon name={ faComment }  size="lg" className='text-slate-700' />
					<Icon name={ faRetweet }  size="lg" className='text-slate-700' />
					<Icon name={ faDownload } size="lg" className='text-slate-700' />
				</div>

			</div>

				<div className='w-1/4 h-ful flex'>
				</div>
		</section>
  	)	
}
