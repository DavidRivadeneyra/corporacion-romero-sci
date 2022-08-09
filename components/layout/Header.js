import React from 'react'
import MenuIcon from '../icons/MenuIcon'
import Link from 'next/link'

const Header = () => {
	return (
		<>
			<header className='w-full border-b-2 border-dark-200 bg-basic-white'>
				<div className='section-container'>
					<div className='header-structure margin-responsive '>
						<div>
							<Link href='/'>
								<img
									src='img/cr-logo-small-dark.svg'
									alt='Logo Corporación Romero SCI'
									className='hidden md:block md:h-16 cursor-pointer'
								/>
							</Link>
							<Link href='/'>
								<img
									src='img/cr-logo-small-dark.svg'
									alt='Logo Corporación Romero SCI'
									className='h-8 md:hidden cursor-pointer'
								/>
							</Link>
						</div>

						<div className='hidden md:flex gap-6'>
							<button className='button-link-dark-sm text-dark-400 hover:text-dark-100'>
								<a href='#'>Nustros trabajos</a>
							</button>
							<button className='button-link-dark-sm text-dark-400 hover:text-dark-100'>
								<Link href='/nosotros'>
									<a>Por qué elegirnos</a>
								</Link>
							</button>
							<button className='button-ghost-dark-sm border-dark-900 hover:bg-dark-900 hover:border-dark-800 text-dark-400 hover:text-dark-100'>
								<a href='#'>Contáctanos</a>
							</button>
						</div>
						<div className='flex items-center md:hidden'>
							<button>
								<MenuIcon className='fill-dark-700 h-10' />
							</button>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
