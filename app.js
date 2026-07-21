document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const reportTimeInput = document.getElementById("report-time");
    const reporterPhoneInput = document.getElementById("reporter-phone");
    const reporterNameInput = document.getElementById("reporter-name");
    const typeButtons = document.querySelectorAll(".type-btn");
    let currentIncidentType = "cháy";
    const addressInput = document.getElementById("address-input");
    const addressDetailInput = document.getElementById("address-detail");
    const isMarineCheckbox = document.getElementById("is-marine");
    const incidentDetailTextarea = document.getElementById("incident-detail");
    const fireAreaInput = document.getElementById("fire-area");
    const controlTimeInput = document.getElementById("control-time");
    const mobilizedForcesTextarea = document.getElementById("mobilized-forces");
    
    // Casualties Toggle
    const btnNoCasualties = document.getElementById("btn-no-casualties");
    const btnHasCasualties = document.getElementById("btn-has-casualties");
    const casualtiesCountGroup = document.getElementById("casualties-count-group");
    const casualtiesCountInput = document.getElementById("casualties-count");
    const casualtiesStatusGroup = document.getElementById("casualties-status-group");
    const casualtiesStatusInput = document.getElementById("casualties-status");
    
    // Autocomplete & Contacts
    const suggestionsList = document.getElementById("autocomplete-suggestions");
    const matchedSectionId = document.getElementById("matched-section-id");
    const matchedTeamBanner = document.getElementById("matched-team-banner");
    const matchedTeamValue = document.getElementById("matched-team-value");
    const contactsEmptyState = document.getElementById("contacts-empty-state");
    const contactsDisplayList = document.getElementById("contacts-display-list");
    const contactSearchInput = document.getElementById("contact-search");
    
    // Modal
    const btnShowProvince = document.getElementById("btn-show-province");
    const provinceModal = document.getElementById("province-contacts-modal");
    const btnCloseModal = document.getElementById("btn-close-modal");
    const modalOverlay = document.getElementById("modal-overlay");
    const provinceContactsBody = document.getElementById("province-contacts-body");

    const btnShowMarine = document.getElementById("btn-show-marine");
    const marineModal = document.getElementById("marine-contacts-modal");
    const btnCloseMarineModal = document.getElementById("btn-close-marine-modal");
    const modalOverlayMarine = document.getElementById("modal-overlay-marine");
    const marineContactsBody = document.getElementById("marine-contacts-body");
    
    // Reports & Copy
    const report1Textarea = document.getElementById("report-1");
    const report2Textarea = document.getElementById("report-2");
    const copyButtons = document.querySelectorAll(".btn-copy");
    const toastMessage = document.getElementById("toast-message");
    const liveClock = document.getElementById("live-clock");
    
    let hasCasualties = false;
    let selectedUnitMeta = null;

    // --- 1. CLOCK & LIVE TIME ---
    function formatTime(date) {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}h${minutes}`;
    }
    
    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    function initTimes() {
        const now = new Date();
        // pre-fill input in format: "19h29' ngày 11/07/2026"
        const timeStr = formatTime(now);
        const dateStr = formatDate(now);
        reportTimeInput.value = `${timeStr}' ngày ${dateStr}`;
        
        // Live clock update
        setInterval(() => {
            const clockNow = new Date();
            const hours = String(clockNow.getHours()).padStart(2, '0');
            const minutes = String(clockNow.getMinutes()).padStart(2, '0');
            const seconds = String(clockNow.getSeconds()).padStart(2, '0');
            const dateS = formatDate(clockNow);
            liveClock.textContent = `${hours}:${minutes}:${seconds} ${dateS}`;
        }, 1000);
    }
    initTimes();

    // --- 2. CASUALTIES TOGGLE ---
    btnNoCasualties.addEventListener("click", () => {
        hasCasualties = false;
        btnNoCasualties.classList.add("active");
        btnHasCasualties.classList.remove("active");
        casualtiesCountGroup.classList.add("hidden");
        casualtiesStatusGroup.classList.add("hidden");
        updateReports();
    });

    btnHasCasualties.addEventListener("click", () => {
        hasCasualties = true;
        btnHasCasualties.classList.add("active");
        btnNoCasualties.classList.remove("active");
        casualtiesCountGroup.classList.remove("hidden");
        casualtiesStatusGroup.classList.remove("hidden");
        updateReports();
    });

    // Helper function to remove Vietnamese diacritics
    function removeDiacritics(str) {
        if (!str) return "";
        return str.normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .replace(/đ/g, "d")
                  .replace(/Đ/g, "D");
    }

    // Helper function to convert to Title Case
    function toTitleCase(str) {
        if (!str) return "";
        return str.split(" ")
                  .map(w => w ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : "")
                  .join(" ");
    }

    // Helper function to get standardized address path
    function getFormattedNewAddress(sectionType, sectionName, district) {
        const typeStr = sectionType.toLowerCase();
        const nameStr = toTitleCase(sectionName);
        
        // If the type is ĐẶC KHU, return đặc khu [Name], tỉnh Quảng Ninh
        if (sectionType.toUpperCase() === "ĐẶC KHU") {
            return `đặc khu ${nameStr}, tỉnh Quảng Ninh`;
        }
        
        // Return without district/city/town (bỏ huyện, thị xã, thành phố theo yêu cầu)
        return `${typeStr} ${nameStr}, tỉnh Quảng Ninh`;
    }

    // --- 3. AUTOCOMPLETE & ADMINISTRATIVE MAPPING ---
    let currentMatches = [];

    function selectMatch(match) {
        if (!match) return;
        addressInput.value = match.matchedName;
        matchedSectionId.value = match.section.id;
        selectedUnitMeta = {
            id: match.section.id,
            matchedName: match.matchedName,
            fullAddress: match.fullAddress,
            district: match.section.district,
            team: match.section.team,
            sectionName: match.section.name,
            sectionType: match.section.type
        };
        
        suggestionsList.classList.add("hidden");
        displayContacts(match.section.id);
        updateReports();

        // Scroll to contacts on mobile view if needed
        const contactsPanel = document.querySelector(".contacts-panel");
        if (contactsPanel && window.innerWidth <= 768) {
            contactsPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    addressInput.addEventListener("input", (e) => {
        const query = e.target.value.trim();
        if (!query) {
            currentMatches = [];
            suggestionsList.classList.add("hidden");
            return;
        }
        
        const queryClean = removeDiacritics(query.toLowerCase());
        const matches = [];
        
        SECTIONS_DATA.forEach(section => {
            // Check direct section name matches
            const cleanSecName = removeDiacritics(section.name.toLowerCase());
            const cleanSecType = removeDiacritics(section.type.toLowerCase());
            const fullSecName = `${cleanSecType} ${cleanSecName}`;
            
            if (fullSecName.includes(queryClean) || cleanSecName.includes(queryClean)) {
                matches.push({
                    type: "new",
                    section: section,
                    matchedName: `${toTitleCase(section.type)} ${toTitleCase(section.name)}`,
                    displayText: `${toTitleCase(section.type)} ${toTitleCase(section.name)}, ${toTitleCase(section.district)}`,
                    fullAddress: getFormattedNewAddress(section.type, section.name, section.district)
                });
            }
            
            // Check components (old wards/communes) matches
            section.components.forEach(comp => {
                const cleanComp = removeDiacritics(comp.toLowerCase());
                if (cleanComp.includes(queryClean) && cleanComp !== cleanSecName) {
                    const compType = section.type === "PHƯỜNG" ? "Phường" : "Xã";
                    let formattedDistrict = section.district;
                    if (formattedDistrict.toLowerCase().startsWith("huyện ")) {
                        formattedDistrict = "huyện " + toTitleCase(formattedDistrict.substring(6));
                    } else if (formattedDistrict.toLowerCase().startsWith("thị xã ")) {
                        formattedDistrict = "thị xã " + toTitleCase(formattedDistrict.substring(7));
                    } else if (formattedDistrict.toLowerCase().startsWith("thành phố ")) {
                        formattedDistrict = "thành phố " + toTitleCase(formattedDistrict.substring(10));
                    }
                    const oldLabel = `${compType} ${toTitleCase(comp)} ${formattedDistrict}, nay là ${section.type.toLowerCase()} ${toTitleCase(section.name)}, tỉnh Quảng Ninh`;
                    
                    matches.push({
                        type: "old",
                        section: section,
                        matchedName: `${compType} ${toTitleCase(comp)}`,
                        displayText: oldLabel,
                        fullAddress: getFormattedNewAddress(section.type, section.name, section.district)
                    });
                }
            });
        });
        
        currentMatches = matches;

        if (matches.length > 0) {
            suggestionsList.innerHTML = "";
            // Limit to top 8 suggestions
            matches.slice(0, 8).forEach(match => {
                const itemDiv = document.createElement("div");
                itemDiv.className = "autocomplete-item";
                
                // Highlight match
                let label = match.displayText;
                const cleanLabel = removeDiacritics(label.toLowerCase());
                const idx = cleanLabel.indexOf(queryClean);
                if (idx !== -1) {
                    label = label.substring(0, idx) + `<span class="hl-match">${label.substring(idx, idx + query.length)}</span>` + label.substring(idx + query.length);
                }
                
                itemDiv.innerHTML = `
                    <span>${label}</span>
                    <span class="sub-info">Quản lý: ${match.section.team}</span>
                `;
                
                const handleSelection = (evt) => {
                    evt.preventDefault();
                    evt.stopPropagation();
                    selectMatch(match);
                };

                // Use touchstart & pointerdown for instant response on mobile devices
                itemDiv.addEventListener("pointerdown", handleSelection);
                itemDiv.addEventListener("touchstart", handleSelection, { passive: false });
                itemDiv.addEventListener("click", handleSelection);
                
                suggestionsList.appendChild(itemDiv);
            });
            suggestionsList.classList.remove("hidden");

            // Auto match if exact match found
            const exactMatch = matches.find(m => {
                const cleanInput = removeDiacritics(query.toLowerCase());
                const cleanName = removeDiacritics(m.matchedName.toLowerCase());
                return cleanInput === cleanName;
            });
            if (exactMatch) {
                selectMatch(exactMatch);
            }
        } else {
            suggestionsList.classList.add("hidden");
        }
    });

    // Support Enter key on mobile keyboard to select top match
    addressInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (currentMatches.length > 0) {
                selectMatch(currentMatches[0]);
                addressInput.blur();
            }
        }
    });

    // Auto-select on blur if typed text matches
    addressInput.addEventListener("blur", () => {
        setTimeout(() => {
            if (currentMatches.length > 0 && (!matchedSectionId.value || addressInput.value.trim())) {
                const queryClean = removeDiacritics(addressInput.value.trim().toLowerCase());
                const best = currentMatches.find(m => removeDiacritics(m.matchedName.toLowerCase()) === queryClean) || currentMatches[0];
                if (best && queryClean.length >= 2) {
                    selectMatch(best);
                }
            }
        }, 250);
    });

    // Close autocomplete when clicking/touching outside safely
    const hideSuggestionsOnOutside = (e) => {
        if (!addressInput.contains(e.target) && !suggestionsList.contains(e.target)) {
            suggestionsList.classList.add("hidden");
        }
    };
    document.addEventListener("pointerdown", hideSuggestionsOnOutside);
    document.addEventListener("click", hideSuggestionsOnOutside);

    // --- 4. CONTACTS DIRECTORY RENDER ---
    function formatPhoneLinks(text) {
        if (!text) return "";
        // Find phone patterns like 09xx.xxx.xxx, 02033.xxx.xxx, etc.
        const phoneRegex = /([0-9]{3,5}\.[0-9]{3,4}\.[0-9]{3,4}|0[0-9]{9,10})/g;
        return text.replace(phoneRegex, (phone) => {
            const cleanPhone = phone.replace(/\./g, "");
            return `<a href="tel:${cleanPhone}" class="phone-link">${phone}</a>`;
        });
    }

    function displayContacts(sectionId) {
        const section = SECTIONS_DATA.find(s => s.id === sectionId);
        if (!section) return;

        contactsEmptyState.classList.add("hidden");
        contactsDisplayList.classList.remove("hidden");
        matchedTeamBanner.classList.remove("hidden");
        
        // Set Team Value (handle Marine override)
        updateTeamDisplay();

        contactsDisplayList.innerHTML = "";
        
        section.subsections.forEach(sub => {
            const card = document.createElement("div");
            card.className = "contact-card";
            
            const cardHeader = document.createElement("div");
            cardHeader.className = "contact-card-header";
            cardHeader.textContent = sub.title;
            card.appendChild(cardHeader);
            
            const cardBody = document.createElement("div");
            cardBody.className = "contact-card-body";
            
            if (sub.contacts.length === 0 || (sub.contacts.length === 1 && sub.contacts[0].text.includes("Không có thông tin"))) {
                cardBody.innerHTML = `<span class="no-data-text">Không có thông tin liên lạc</span>`;
            } else {
                sub.contacts.forEach(c => {
                    const item = document.createElement("div");
                    item.className = "contact-item";
                    
                    // Parse text for labels and phones
                    const parts = c.text.split(/; SĐT:|SĐT:|; số điện thoại:|số điện thoại:/i);
                    if (parts.length > 1) {
                        const label = parts[0].trim();
                        const phones = parts[1].trim().split(/[,;/]+/);
                        const phoneLinks = phones.map(p => {
                            const cleanP = p.trim().replace(/\./g, "");
                            return `<a href="tel:${cleanP}" class="phone-link">${p.trim()}</a>`;
                        }).join(", ");
                        
                        item.innerHTML = `
                            <span class="contact-label">${label}</span>
                            <div class="contact-phone-list">${phoneLinks}</div>
                        `;
                    } else {
                        item.innerHTML = `
                            <span class="contact-label">${formatPhoneLinks(c.text)}</span>
                        `;
                    }
                    cardBody.appendChild(item);
                });
            }
            card.appendChild(cardBody);
            contactsDisplayList.appendChild(card);
        });
    }

    function updateTeamDisplay() {
        if (!selectedUnitMeta) return;
        
        if (isMarineCheckbox.checked) {
            matchedTeamValue.textContent = "ĐỘI 4 (SÔNG BIỂN)";
            matchedTeamValue.style.color = "var(--accent-blue)";
            matchedTeamBanner.style.borderColor = "var(--accent-blue)";
            matchedTeamBanner.style.background = "linear-gradient(90deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 100%)";
        } else {
            // Map team name to user's requested naming
            let teamName = selectedUnitMeta.team;
            if (teamName === "Đội 6") teamName = "Đội KV4";
            else if (teamName === "Đội 7") teamName = "Đội KV7";
            else if (teamName === "Tổ Hải Hà") teamName = "Đội KV8";
            else if (teamName === "Tổ Cẩm Phả") teamName = "Đội KV5";
            else if (teamName === "Tổ Quảng Yên") teamName = "Đội KV3";
            else if (teamName === "Tổ Uông Bí") teamName = "Đội KV2";
            else if (teamName === "Tổ Đông Triều") teamName = "Đội KV1";
            else if (teamName === "Tổ Móng Cái") teamName = "Đội KV9";
            else if (teamName === "Tổ Vân Đồn") teamName = "Đội KV6";
            else if (teamName === "Tổ Cô Tô") teamName = "Đội KV10";
            
            matchedTeamValue.textContent = teamName.toUpperCase();
            matchedTeamValue.style.color = "var(--accent-red)";
            matchedTeamBanner.style.borderColor = "var(--accent-red)";
            matchedTeamBanner.style.background = "linear-gradient(90deg, rgba(239, 68, 68, 0.15) 0%, rgba(245, 158, 11, 0.05) 100%)";
        }
    }

    // --- 5. SEARCH ENGINE FOR ALL CONTACTS ---
    contactSearchInput.addEventListener("input", (e) => {
        const query = e.target.value.trim();
        if (!query) {
            if (selectedUnitMeta) {
                displayContacts(selectedUnitMeta.id);
            } else {
                contactsEmptyState.classList.remove("hidden");
                contactsDisplayList.classList.add("hidden");
                matchedTeamBanner.classList.add("hidden");
            }
            return;
        }

        const queryClean = removeDiacritics(query.toLowerCase());

        contactsEmptyState.classList.add("hidden");
        contactsDisplayList.classList.remove("hidden");
        matchedTeamBanner.classList.add("hidden"); // Hide banner in global search

        contactsDisplayList.innerHTML = "";
        
        let found = false;

        SECTIONS_DATA.forEach(section => {
            let sectionMatches = [];
            
            section.subsections.forEach(sub => {
                let matches = sub.contacts.filter(c => removeDiacritics(c.text.toLowerCase()).includes(queryClean));
                if (matches.length > 0) {
                    sectionMatches.push({
                        title: sub.title,
                        contacts: matches
                    });
                }
            });

            // If section name matches or any contact matches
            const cleanSecName = removeDiacritics(section.name.toLowerCase());
            const cleanDistrict = removeDiacritics(section.district.toLowerCase());
            if (cleanSecName.includes(queryClean) || cleanDistrict.includes(queryClean) || sectionMatches.length > 0) {
                found = true;
                const secCard = document.createElement("div");
                secCard.className = "contact-card";
                secCard.style.borderColor = "var(--accent-amber)";
                
                const secHeader = document.createElement("div");
                secHeader.className = "contact-card-header";
                secHeader.style.color = "var(--accent-amber)";
                secHeader.textContent = `${section.type} ${section.name} (${section.district}) - ${section.team}`;
                secCard.appendChild(secHeader);
                
                const secBody = document.createElement("div");
                secBody.className = "contact-card-body";

                if (sectionMatches.length === 0) {
                    // Show primary contact (PCCC team info)
                    const pcccSub = section.subsections.find(s => s.id === 1);
                    if (pcccSub && pcccSub.contacts.length > 0) {
                        pcccSub.contacts.forEach(c => {
                            const item = document.createElement("div");
                            item.className = "contact-item";
                            item.innerHTML = `<span class="contact-label"><small style="color:var(--color-text-muted)">PCCC:</small> ${formatPhoneLinks(c.text)}</span>`;
                            secBody.appendChild(item);
                        });
                    } else {
                        secBody.innerHTML = `<span class="no-data-text">Nhấp để xem chi tiết danh bạ</span>`;
                    }
                } else {
                    sectionMatches.forEach(sm => {
                        sm.contacts.forEach(c => {
                            const item = document.createElement("div");
                            item.className = "contact-item";
                            item.innerHTML = `
                                <span class="contact-label">
                                    <small style="color:var(--color-text-muted)">${sm.title}:</small> 
                                    ${formatPhoneLinks(c.text)}
                                </span>
                            `;
                            secBody.appendChild(item);
                        });
                    });
                }
                
                // Allow clicking card to load it in active session
                secCard.style.cursor = "pointer";
                secCard.addEventListener("click", () => {
                    addressInput.value = `${section.type === 'PHƯỜNG' ? 'Phường' : 'Xã'} ${section.name}`;
                    matchedSectionId.value = section.id;
                    selectedUnitMeta = {
                        id: section.id,
                        matchedName: `${section.type === 'PHƯỜNG' ? 'Phường' : 'Xã'} ${section.name}`,
                        fullAddress: getFormattedNewAddress(section.type, section.name, section.district),
                        district: section.district,
                        team: section.team,
                        sectionName: section.name,
                        sectionType: section.type
                    };
                    displayContacts(section.id);
                    updateReports();
                    contactSearchInput.value = "";
                });

                secCard.appendChild(secBody);
                contactsDisplayList.appendChild(secCard);
            }
        });

        if (!found) {
            contactsDisplayList.innerHTML = `<div class="info-empty"><div class="info-icon">❔</div><p>Không tìm thấy kết quả phù hợp với từ khoá "${query}".</p></div>`;
        }
    });

    // --- 6. PROVINCE LEADERSHIP MODAL ---
    btnShowProvince.addEventListener("click", () => {
        provinceContactsBody.innerHTML = "";
        
        LEADERSHIP_DATA.forEach(sub => {
            const card = document.createElement("div");
            card.className = "contact-card";
            card.style.borderColor = "var(--accent-red)";
            
            const header = document.createElement("div");
            header.className = "contact-card-header";
            header.style.color = "var(--accent-red)";
            header.textContent = sub.title;
            card.appendChild(header);
            
            const body = document.createElement("div");
            body.className = "contact-card-body";
            
            sub.contacts.forEach(c => {
                const item = document.createElement("div");
                item.className = "contact-item";
                
                const parts = c.text.split(/; SĐT:|SĐT:|; số điện thoại:|số điện thoại:/i);
                if (parts.length > 1) {
                    const label = parts[0].trim();
                    const phones = parts[1].trim().split(/[,;/]+/);
                    const phoneLinks = phones.map(p => {
                        const cleanP = p.trim().replace(/\./g, "");
                        return `<a href="tel:${cleanP}" class="phone-link">${p.trim()}</a>`;
                    }).join(", ");
                    
                    item.innerHTML = `
                        <span class="contact-label">${label}</span>
                        <div class="contact-phone-list">${phoneLinks}</div>
                    `;
                } else {
                    item.innerHTML = `
                        <span class="contact-label">${formatPhoneLinks(c.text)}</span>
                    `;
                }
                body.appendChild(item);
            });
            card.appendChild(body);
            provinceContactsBody.appendChild(card);
        });
        
        provinceModal.classList.remove("hidden");
    });

    btnShowMarine.addEventListener("click", () => {
        marineContactsBody.innerHTML = "";
        
        MARINE_CONTACTS.forEach(sub => {
            const card = document.createElement("div");
            card.className = "contact-card";
            card.style.borderColor = "var(--accent-blue)";
            
            const header = document.createElement("div");
            header.className = "contact-card-header";
            header.style.color = "var(--accent-blue)";
            header.textContent = sub.title;
            card.appendChild(header);
            
            const body = document.createElement("div");
            body.className = "contact-card-body";
            
            sub.contacts.forEach(c => {
                const item = document.createElement("div");
                item.className = "contact-item";
                
                const parts = c.text.split(/; SĐT:|SĐT:|; số điện thoại:|số điện thoại:/i);
                if (parts.length > 1) {
                    const label = parts[0].trim();
                    const phones = parts[1].trim().split(/[,;/]+/);
                    const phoneLinks = phones.map(p => {
                        const cleanP = p.trim().replace(/\./g, "");
                        return `<a href="tel:${cleanP}" class="phone-link">${p.trim()}</a>`;
                    }).join(", ");
                    
                    item.innerHTML = `
                        <span class="contact-label">${label}</span>
                        <div class="contact-phone-list">${phoneLinks}</div>
                    `;
                } else {
                    item.innerHTML = `
                        <span class="contact-label">${formatPhoneLinks(c.text)}</span>
                    `;
                }
                body.appendChild(item);
            });
            card.appendChild(body);
            marineContactsBody.appendChild(card);
        });
        
        marineModal.classList.remove("hidden");
    });

    function closeModal() {
        provinceModal.classList.add("hidden");
        marineModal.classList.add("hidden");
    }

    btnCloseModal.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", closeModal);
    btnCloseMarineModal.addEventListener("click", closeModal);
    modalOverlayMarine.addEventListener("click", closeModal);

    // --- 7. AUTOMATIC REPORT GENERATOR ---
    function updateReports() {
        const timeVal = reportTimeInput.value.trim() || "[Thời gian]";
        const reporterName = reporterNameInput.value.trim() || "[Họ tên]";
        const reporterPhone = reporterPhoneInput.value.trim() || "[SĐT]";
        const incidentType = currentIncidentType;
        
        const incidentDetailRaw = incidentDetailTextarea.value.trim();
        let incidentDetail = incidentDetailRaw || "[Nội dung sự cố]";
        
        // Strip duplicate incident type word (like "cháy cháy") if user types it
        if (incidentDetailRaw && incidentType) {
            const typeClean = incidentType.trim().toLowerCase();
            const detailsClean = incidentDetailRaw.toLowerCase();
            if (detailsClean.startsWith(typeClean)) {
                const typeRegex = new RegExp(`^${typeClean}\\s*`, "i");
                incidentDetail = incidentDetailRaw.replace(typeRegex, "").trim();
                if (!incidentDetail) {
                    incidentDetail = "[Nội dung sự cố]";
                }
            }
        }
        
        const addressDetail = addressDetailInput.value.trim();
        const fireArea = fireAreaInput.value.trim();
        const controlTime = controlTimeInput.value.trim();
        const mobilizedForces = mobilizedForcesTextarea.value.trim();
        
        // Determine KV Team
        let teamCode = "Đội KV";
        if (isMarineCheckbox.checked) {
            teamCode = "Đội 4";
        } else if (selectedUnitMeta) {
            let t = selectedUnitMeta.team;
            if (t === "Đội 6") teamCode = "Đội KV4";
            else if (t === "Đội 7") teamCode = "Đội KV7";
            else if (t === "Tổ Hải Hà") teamCode = "Đội KV8";
            else if (t === "Tổ Cẩm Phả") teamCode = "Đội KV5";
            else if (t === "Tổ Quảng Yên") teamCode = "Đội KV3";
            else if (t === "Tổ Uông Bí") teamCode = "Đội KV2";
            else if (t === "Tổ Đông Triều") teamCode = "Đội KV1";
            else if (t === "Tổ Móng Cái") teamCode = "Đội KV9";
            else if (t === "Tổ Vân Đồn") teamCode = "Đội KV6";
            else if (t === "Tổ Cô Tô") teamCode = "Đội KV10";
            else teamCode = t;
        }

        // Determine Casualty status
        let casualtyStr1 = "không có người bị nạn";
        let casualtyStr2 = "(không có người bị nạn)";
        if (hasCasualties) {
            const count = casualtiesCountInput.value;
            const status = casualtiesStatusInput.value.trim() || "chưa rõ tình trạng";
            casualtyStr1 = `có ${count} người bị nạn (${status})`;
            casualtyStr2 = `(có ${count} người bị nạn, ${status})`;
        }

        // Determine Addresses
        let address1 = "[Địa chỉ]";
        let address2 = "[Địa chỉ]";
        
        if (selectedUnitMeta) {
            const detailStr = addressDetail ? addressDetail + ", " : "";
            const newAdminAddress = getFormattedNewAddress(selectedUnitMeta.sectionType, selectedUnitMeta.sectionName, selectedUnitMeta.district);
            
            // In accordance with "phần thông tin thì chỉ hiện địa chỉ mới"
            address1 = detailStr + newAdminAddress;
            address2 = address1;
        } else {
            // Fallback to text inputs
            const textAddr = addressInput.value.trim();
            if (textAddr) {
                address1 = addressDetail ? `${addressDetail}, ${textAddr}` : textAddr;
                address2 = address1;
            }
        }

        // Extract hour/minute and date for report 2
        let reportHour = timeVal;
        let reportDate = formatDate(new Date());
        
        // Parse time if matching "HHhMM' ngày DD/MM/YYYY" or similar
        const timeMatch = timeVal.match(/(\d+h\d+|\d+:\d+).*?(\d{1,2}\/\d{1,2}\/\d{4})/);
        if (timeMatch) {
            reportHour = timeMatch[1] + "'";
            reportDate = timeMatch[2];
        }

        // Determine administrative level text for coordination (Xã/Phường/Thị trấn/Đặc khu)
        let coordUnitText = "Xã";
        if (selectedUnitMeta) {
            const secType = selectedUnitMeta.sectionType.toUpperCase();
            if (secType === "PHƯỜNG") coordUnitText = "Phường";
            else if (secType === "THỊ TRẤN") coordUnitText = "Thị trấn";
            else if (secType === "ĐẶC KHU") coordUnitText = "Đặc khu";
            else coordUnitText = "Xã";
        } else {
            const textAddr = addressInput.value.toLowerCase();
            if (textAddr.includes("phường")) coordUnitText = "Phường";
            else if (textAddr.includes("thị trấn")) coordUnitText = "Thị trấn";
            else if (textAddr.includes("đặc khu")) coordUnitText = "Đặc khu";
            else coordUnitText = "Xã";
        }

        // Determine dynamic vehicle dispatch and phone label text
        let vehicleType = "xuất xe chữa cháy";
        if (incidentType === "tai nạn" || incidentType === "sự cố") {
            vehicleType = "xuất xe cứu nạn cứu hộ";
        }

        // --- GENERATE REPORT 1 ---
        const report1 = `Trung tâm 114 báo cáo: Hồi ${timeVal} Trung tâm 114 nhận tin báo từ người dân báo xảy ra ${incidentType} ${incidentDetail} (${casualtyStr1}), địa chỉ: ${address1}. Trung tâm 114 báo ${teamCode} ${vehicleType}, báo UBND ${coordUnitText}, Công an ${coordUnitText}, điện lực phối hợp. SĐT báo ${incidentType}: ${reporterPhone}`;
        report1Textarea.value = report1;

        // --- GENERATE REPORT 2 ---
        let mobilizedStr = "";
        if (mobilizedForces) {
            mobilizedStr = `, đồng thời huy động ${mobilizedForces} đến hiện trường tham gia chữa cháy`;
        }
        
        let areaStr = "";
        if (fireArea) {
            areaStr = ` Diện tích khu vực xảy ra khoảng ${fireArea}m2.`;
        }
        
        // Determine terminology for Report 2 based on incident type
        let incidentVerb = "cháy";
        let incidentSubject = "đám cháy";
        if (incidentType === "tai nạn") {
            incidentVerb = "tai nạn";
            incidentSubject = "vụ tai nạn";
        } else if (incidentType === "sự cố") {
            incidentVerb = "sự cố cứu nạn cứu hộ";
            incidentSubject = "vụ việc";
        }

        let controlStr = "";
        if (controlTime) {
            controlStr = ` Đến ${controlTime} ${incidentSubject} cơ bản được khống chế.`;
        } else {
            controlStr = ` Đến nay ${incidentSubject} cơ bản đã được khống chế.`;
        }

        const report2 = `Phòng PC07 kính báo cáo đồng chí Giám đốc và các đồng chí Phó Giám đốc Công an tỉnh: 
Hồi ${reportHour} ngày ${reportDate}, Phòng PC07 nhận tin từ người dân SĐT ${reporterPhone} báo xảy ra ${incidentVerb} ${incidentDetail} ${casualtyStr2}, địa chỉ: ${address2}. Ngay sau khi nhận tin, Phòng PC07 đã nhanh chóng huy động lực lượng, phương tiện${mobilizedStr}.${areaStr}${controlStr} Hiện nay, Phòng PC07 tiếp tục phối hợp với các lực lượng triển khai làm mát.
- Nguyên nhân: đang xác minh.
- Thiệt hại: đang thống kê.
Phòng PC07 kính báo cáo các đồng chí lãnh đạo Công an tỉnh nắm!`;
        report2Textarea.value = report2;
    }

    // Bind incident type selector buttons
    typeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            typeButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentIncidentType = btn.getAttribute("data-value");
            
            // Update labels dynamically based on incident type
            const detailLabel = document.querySelector('label[for="incident-detail"]');
            if (detailLabel) {
                detailLabel.textContent = `Nội dung báo ${currentIncidentType}`;
            }
            
            updateReports();
        });
    });

    // Bind event listeners for real-time updates
    const inputs = [
        reportTimeInput, reporterPhoneInput, reporterNameInput, 
        addressInput, addressDetailInput, 
        incidentDetailTextarea, casualtiesCountInput, casualtiesStatusInput,
        fireAreaInput, controlTimeInput, mobilizedForcesTextarea
    ];
    inputs.forEach(input => input.addEventListener("input", updateReports));
    isMarineCheckbox.addEventListener("change", () => {
        updateTeamDisplay();
        updateReports();
    });

    // --- 8. COPY TO CLIPBOARD ---
    copyButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-target");
            const textarea = document.getElementById(targetId);
            
            if (textarea) {
                // Clipboard Write
                navigator.clipboard.writeText(textarea.value).then(() => {
                    // Show toast feedback
                    toastMessage.textContent = "Đã sao chép vào bộ nhớ tạm!";
                    toastMessage.classList.remove("hidden");
                    setTimeout(() => {
                        toastMessage.classList.add("hidden");
                    }, 2000);
                }).catch(err => {
                    console.error("Copy failed: ", err);
                    // Fallback
                    textarea.select();
                    document.execCommand("copy");
                    toastMessage.textContent = "Đã sao chép (fallback)!";
                    toastMessage.classList.remove("hidden");
                    setTimeout(() => {
                        toastMessage.classList.add("hidden");
                    }, 2000);
                });
            }
        });
    });

    // --- 9. HEADER NAVIGATION TABS SWITCHING ---
    const tabReport = document.getElementById("tab-report");
    const tabDuty = document.getElementById("tab-duty");
    const reportView = document.getElementById("report-view");
    const dutyView = document.getElementById("duty-view");
    
    if (tabReport && tabDuty) {
        tabReport.addEventListener("click", () => {
            tabReport.classList.add("active");
            tabDuty.classList.remove("active");
            reportView.classList.remove("hidden");
            dutyView.classList.add("hidden");
        });
        
        tabDuty.addEventListener("click", () => {
            tabDuty.classList.add("active");
            tabReport.classList.remove("active");
            reportView.classList.add("hidden");
            dutyView.classList.remove("hidden");
        });
    }

    // --- 10. DUTY ROSTER DISPLAY CONTROLLER ---
    const chiefButtons = document.querySelectorAll("#chief-buttons .duty-btn");
    const officerButtons = document.querySelectorAll("#officer-buttons .duty-btn");
    const officerAlertText = document.getElementById("officer-alert-text");
    const officerPhoneText = document.getElementById("officer-phone-text");
    const chiefAlertText = document.getElementById("chief-alert-text");
    const chiefPhoneText = document.getElementById("chief-phone-text");
    const dutyDisplayPanel = document.getElementById("duty-display-panel");

    const CHIEF_ROSTER = [
        { name: "ĐỘI TRƯỞNG LONG", phone: "0333.668.559", text: "(Đ/c Phạm Đức Long)", displayName: "Đ/c Phạm Đức Long" },
        { name: "ĐỘI PHÓ HIẾU", phone: "0904.690.482", text: "(Đ/c Đào Trung Hiếu)", displayName: "Đ/c Đào Trung Hiếu" }
    ];

    const OFFICER_ROSTER = [
        { name: "Đ/C TÀI", phone: "036.8118.999", text: "CHÁY, NỔ, SỰ CỐ GỌI Đ/C TÀI - ĐỘI 3", displayName: "Đ/c Tài" },
        { name: "Đ/C THẮNG", phone: "0988.612.374", text: "CHÁY, NỔ, SỰ CỐ GỌI Đ/C THẮNG - ĐỘI 3", displayName: "Đ/c Thắng" },
        { name: "Đ/C SƠN", phone: "0898.096.114", text: "CHÁY, NỔ, SỰ CỐ GỌI Đ/C NGỌC SƠN - ĐỘI 3", displayName: "Đ/c Ngọc Sơn" },
        { name: "Đ/C LONG", phone: "08882.79.882", text: "CHÁY, NỔ, SỰ CỐ GỌI Đ/C LONG - ĐỘI 3", displayName: "Đ/c Long" }
    ];

    let selectedChiefIndex = 0;
    let selectedOfficerIndex = 0;

    function renderQrCode() {
        const qrImage = document.getElementById("qr-image");
        if (qrImage) {
            qrImage.setAttribute("src", `qrcodes/qr_officer_${selectedOfficerIndex}.png`);
        }
    }

    function renderDutyDisplay() {
        const chief = CHIEF_ROSTER[selectedChiefIndex];
        const officer = OFFICER_ROSTER[selectedOfficerIndex];

        // Update Officer (Main Call - Large display)
        if (officerAlertText && officerPhoneText) {
            officerAlertText.textContent = officer.text;
            officerPhoneText.textContent = officer.phone;
            officerPhoneText.setAttribute("href", `tel:${officer.phone.replace(/\./g, "")}`);
        }

        // Update Chief (Secondary Call - Smaller display)
        if (chiefAlertText && chiefPhoneText) {
            chiefAlertText.textContent = chief.text;
            chiefPhoneText.textContent = chief.phone;
            chiefPhoneText.setAttribute("href", `tel:${chief.phone.replace(/\./g, "")}`);
        }

        // Apply Glow Border matching Officer's incident type text
        if (dutyDisplayPanel) {
            dutyDisplayPanel.className = "duty-display-panel";
            const txt = officer.text.toLowerCase();
            if (txt.includes("cháy nổ")) {
                dutyDisplayPanel.classList.add("active-tai-nạn");
            } else if (txt.includes("cháy")) {
                dutyDisplayPanel.classList.add("active-cháy");
            } else {
                dutyDisplayPanel.classList.add("active-sự-cố");
            }
        }
    }

    if (chiefButtons.length > 0 && officerButtons.length > 0) {
        chiefButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                chiefButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                selectedChiefIndex = parseInt(btn.getAttribute("data-index"), 10);
                
                // Do NOT change QR target on chief selection
                renderDutyDisplay();
            });
        });

        officerButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                officerButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                selectedOfficerIndex = parseInt(btn.getAttribute("data-index"), 10);
                
                // Render officer QR code
                renderQrCode();
                renderDutyDisplay();
            });
        });

        // Initialize displays
        renderDutyDisplay();
        renderQrCode();
    }

    // Initial report rendering
    updateReports();
});
