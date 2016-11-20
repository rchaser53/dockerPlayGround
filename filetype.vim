function! SetTSConfig()
	setf typescript
	setlocal completeopt+=menu,preview
	map <C-e> :TsuGeterrProject<CR>  " typescript error check
	let g:tsuquyomi_tsserver_path = '/Users/rchaser53/node_modules/typescript/bin/tsserver'
	let g:tsuquyomi_disable_quickfix = 1
	let g:tsuquyomi_completion_detail = 1
	let g:tsuquyomi_use_dev_node_module = 2
	let g:syntastic_typescript_checkers = ['tsuquyomi']
endfunction

function! SetMDConfig()
	setf markdown
	au FileType markdown map <C-p> :PrevimOpen<CR> " open browzer for markdown preview
endfunction
	
augroup TestGroup 
	au!
	au BufNewFile,BufRead *.ts :call SetTSConfig()
	au BufNewFile,BufRead *.tsx :call SetTSConfig()
	au BufNewFile,BufRead *.md :call SetMDConfig() 
	au BufNewFile,BufRead *.css setf css
	au BufNewFile,BufRead *.scss setf css
augroup End
