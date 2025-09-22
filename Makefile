# ===========================================
# Git Operations
# ===========================================

# Commit changes to dev branch
commit:
	$(eval msg ?= $(filter-out $@,$(MAKECMDGOALS)))
	@if "$(msg)"=="" (echo Please provide a commit message: make commit "your message" & exit 1)
	git status
	git add .
	git status
	git commit -m "$(msg)"
	git push origin

%:
	@: