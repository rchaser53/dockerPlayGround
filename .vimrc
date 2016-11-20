"dein Scripts-----------------------------
if &compatible
  set nocompatible               " Be iMproved
endif

" Required:
set runtimepath+=/home/app/dein/repos/github.com/Shougo/dein.vim

" Required:
if dein#load_state('/home/app/dein')
	call dein#begin('/home/app/dein')

	" Let dein manage dein
	" Required:
	call dein#add('/home/app/dein/repos/github.com/Shougo/dein.vim')

	" Add or remove your plugins here:
	call dein#add('Shougo/neosnippet.vim')
	call dein#add('Shougo/neosnippet-snippets')

	" You can specify revision/branch/tag.
	call dein#add('Shougo/vimshell', { 'rev': '3787e5' })

	" common 
	call dein#add('Shougo/dein.vim')
	if has('mac')
		call dein#add('Shougo/vimproc.vim', {'build': 'make -f make_mac.mak'})
	else
		call dein#add('Shougo/vimproc.vim', {'build': 'make -f make_unix.mak'})
	endif
		
	call dein#add('Shougo/neosnippet.vim')
	call dein#add('Shougo/neosnippet-snippets')
	call dein#add('Shougo/vimshell', { 'rev': '3787e5' })
	call dein#add('scrooloose/nerdtree')
	call dein#add('vim-syntastic/syntastic')

	" dockerfile
	call dein#add('ekalinin/Dockerfile.vim')

	" css
	call dein#add('hail2u/vim-css3-syntax', {'on_ft': 'css'})

	" jsx
	call dein#add('rchaser53/vim-jsx')

	" If you want to install not installed plugins on startup.
	if dein#check_install()
	  call dein#install()
	endif

	" Required:
	call dein#end()
	call dein#save_state()
endif

" common
filetype plugin indent on
syntax on
:set t_vb=          " prevent beep sound
:set number         " show row number
:set hlsearch
:set ruler
:set wrapscan       " back to the beginning of the line
:nnoremap nh :nohl<CR>

" for tab
:set noexpandtab
:set tabstop=4
:set shiftwidth=4
:set softtabstop=0

" for NERDTree
map <C-n> :NERDTreeToggle<CR>
if @% == '' 
	au vimEnter * execute 'NERDTree'
endif

" for syntastic
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0
let g:syntastic_enable_highlighting = 1
let g:syntastic_javascript_checkers=['tslint']

" for merginal
map <C-m> :MerginalToggle<CR>

" for agit
:command Ag :Agit
:command Git :AgitGit

" for vimgrep
nnoremap [q :cprevious<CR>   " previous vimgrep
nnoremap ]q :cnext<CR>       " next vimgrep
nnoremap [Q :<C-u>cfirst<CR> " first vimgrep
nnoremap ]Q :<C-u>clast<CR>  " last vimgrep
