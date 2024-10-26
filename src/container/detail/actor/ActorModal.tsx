'use client';
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import Image from 'next/image';
import getImagePath from '@/utils/getImagePath';
import { IoPersonSharp } from 'react-icons/io5';
import InfoListItem from './InfoListItem';
import { useAxios } from '@/hooks/useAxios';
import { cn } from '@/lib/utils';

interface ActorModalProps {
  actorId: any;
  closeModal: MouseEventHandler;
}

const ActorModal: React.FC<ActorModalProps> = ({ actorId, closeModal }) => {
  const [axios] = useAxios();
  const [actor, setActor] = useState<any>({});
  const [filmo, setFilmo] = useState<any>([]);
  const [moreState, setMoreState] = useState<any>({ profile: false, filmo: false });
  const [profileHeight, setProfileHeight] = useState(0);
  const [filmoHeight, setFilmoHeight] = useState(0);
  const profileRef = useRef<any>(null);
  const filmoRef = useRef<any>(null);


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/person/${actorId}?language=ko-KR`)
      .then(res => {
        setActor(res.data)
      })
    axios.get(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?language=ko-KR`)
      .then(res => {
        let array = [...res.data.cast];
        array = array.filter(obj => obj.release_date)
        array.sort((a, b) => {
          if (a.release_date > b.release_date) {
            return -1
          } else if (a.release_date < b.release_date) {
            return 1
          } else {
            return b.popularity - a.popularity
          }
        })
        array = array.slice(0, 20);
        setFilmo([...array])
      })
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    let basicHeight = 0;
    if (actor && profileRef.current) {
      const items = profileRef.current.querySelectorAll('li');
      for (let i = 0; i < 4; i++) {
        let itemHeight = items[i].offsetHeight
        basicHeight += itemHeight
      }
      setProfileHeight(moreState.profile ? profileRef.current?.scrollHeight : basicHeight);
    }
  }, [moreState.profile, actor])

  useEffect(() => {
    let basicHeight = 0;
    if (filmo && filmoRef.current) {
      const items = filmoRef.current.querySelectorAll('li');
      for (let i = 0; i < 5; i++) {
        let itemHeight = items[i]?.offsetHeight || 0
        basicHeight += itemHeight
      }
      setFilmoHeight(moreState.filmo ? filmoRef.current?.scrollHeight : basicHeight);
    }
  }, [moreState.filmo, filmo])

  const toggleMoreState = (sectionName: string) => () => {
    setMoreState({ ...moreState, [sectionName]: !moreState[sectionName] })
  }

  return (
    <div className="fixed top-0 left-0 z-50 bg-[#000000cd] w-full h-full overflow-auto pb-10">
      <div className="text-right">
        <button onClick={closeModal} className="group ">
          <IoIosClose
            className="w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] opacity-80 group-hover:opacity-100"
            color={'#EEEEEE'}
          />
        </button>
      </div>

      <div className="flex flex-col items-center w-[min(90%,700px)] mx-auto">
        <div className="w-[220px] h-[350px] md:w-[310px] md:h-[460px] border-white border-solid border-[5px] relative">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="배우 사진"
            src={getImagePath(actor.profile_path) || '/film1.jpg'}
            className="object-cover object-center"
          />
        </div>

        <section className="w-full mt-5">
          <h3 className="text-[#86C49B] flex items-center font-bold gap-2 pb-2 border-b-[1px] border-[#86C49B]">
            <IoPersonSharp size={16} />
            <span className="text-[16px]">PROFILE</span>
          </h3>

          <ul
            className={cn("bg-[rgba(255,255,255,0.1)] px-5 mt-5 italic overflow-hidden transition-[all_0.5s]")}
            ref={profileRef}
            style={{ height: profileHeight }}
          >
            <InfoListItem title='이름' content={actor.name} />
            <InfoListItem title='직업' content={actor.known_for_department} />
            <InfoListItem title='생일' content={actor.birthday ? `${actor.birthday} ~ ${actor.deathday || 'now'}` : null} />
            <InfoListItem title='출생지' content={actor.place_of_birth} />
            {actor.biography ? <InfoListItem content={actor.biography} /> : null}
          </ul>

          {actor.biography ?
            <button className='w-full p-3 text-white hover:underline' onClick={toggleMoreState('profile')}>
              {moreState.profile ? 'Close -' : 'More +'}
            </button> : null}
        </section>
        s
        <section className="w-full mt-5">
          <h3 className="text-[#86C49B] flex items-center font-bold gap-2 pb-2 border-b-[1px] border-[#86C49B]">
            <IoPersonSharp size={16} />
            <span className="text-[16px]">FILMOGRAPHY</span>
          </h3>

          <ul
            className="bg-[rgba(255,255,255,0.1)] px-5 mt-5 italic overflow-hidden transition-[all_0.5s]"
            ref={filmoRef}
            style={{ height: filmoHeight }}
          >
            {filmo.map((film: any) => {
              return (
                <InfoListItem
                  key={film.title}
                  className=' cursor-pointer hover:bg-[#333]'
                  title={film.release_date}
                  content={film.title}
                />
              )
            })}
          </ul>
          {filmo.length > 5 ?
            <button className='w-full p-3 text-white hover:underline' onClick={toggleMoreState('filmo')}>
              {moreState.filmo ? 'Close -' : 'More +'}
            </button> : null}
        </section>
      </div>
    </div>
  );
};

export default ActorModal;
