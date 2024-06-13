'use client'

import Link from 'next/link'
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	MenuItem,
	Drawer,
} from '@mui/material'
import { LuMenu } from 'react-icons/lu'
import { useState } from 'react'

const Layout = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleMenuClose = () => {
		setAnchorEl(null)
	}

	return (
		<div>
			<AppBar position="static" color="inherit" className="mb-5">
				<Toolbar>
					<Typography variant="h4" component="div" className="grow text-center">
						<Link href="/">あしたぼコマ表</Link>
					</Typography>
					<IconButton
						edge="end"
						color="inherit"
						aria-label="menu"
						onClick={handleMenuOpen}
					>
						<LuMenu />
					</IconButton>
					<Drawer
						anchor="right"
						open={Boolean(anchorEl)}
						onClose={handleMenuClose}
					>
						<MenuItem onClick={handleMenuClose}>
							<Link href="/">コマ表</Link>
						</MenuItem>
						<MenuItem onClick={handleMenuClose}>未実装</MenuItem>
						<MenuItem onClick={handleMenuClose}>いつかつくるよ</MenuItem>
					</Drawer>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Layout
